(function (window) {
  var PENDING = "pending";
  var RESOLVED = "resolved";
  var REJECTED = "rejected";
  function Promise(executor) {
    var self = this;

    this.status = PENDING;
    this.data = null;
    this.callbacks = [];
    function resolve(value) {
      if (self.status !== PENDING) return;
      self.data = value;
      self.status = RESOLVED;
      if (self.callbacks.length > 0) {
        self.callbacks.forEach((callbacks) => {
          setTimeout(() => {
            callbacks.onResolved();
          });
        });
      }
    }
    function reject() {
      if (self.status !== PENDING) return;
      self.data = value;
      self.status = REJECTED;
      if (self.callbacks.length > 0) {
        self.callbacks.forEach((callbacks) => {
          setTimeout(() => {
            callbacks.onRejected();
          });
        });
      }
    }
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  Promise.prototype.resolve = function (value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(resolve, reject);
      } else {
        resolve(value);
      }
    });
  };
  Promise.prototype.reject = function (reason) {
    return new Promise((_, reject) => reject(reason));
  };
  Promise.then = function (onResolved, onRejected) {
    var self = this;
    onResolved =
      typeof onResolved === "function" ? onResolved : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    return new Promise((resolve, reject) => {
      function handle(callback) {
        try {
          var result = callback(self.data);
          if (result instanceof Promise) {
            result.then(resilve, reject);
          } else {
            resolve(value);
          }
        } catch (error) {
          reject(error);
        }
      }
      if (self.status === PENDING) {
        self.callbacks.push({
          onRejected: handle(onResolved),
          onRejected: handle(onRejected),
        });
      } else if (self.status === RESOLVED) {
        setTimeout(() => {
          handle(onResolved);
        });
      } else {
        setTimeout(() => {
          handle(onRejected);
        });
      }
    });
  };
  Promise.catch = function (onRejected) {
    return new Promise((resolve, reject) => {
      try {
        var result = onRejected();
        if (result instanceof Promise) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  Promise.all = function (promiseArray) {
    if (Array.isArray(promiseArray)) throw "need Array";
    var resultArray = new Array(promiseArray.length);
    var resultCount = 0;
    return new Promise((resolve, reject) => {
      promiseArray.forEach((promise, index) => {
        Promise.resolve(promise).then(
          (value) => {
            resultCount++;
            resultArray[index] = value
            if(promiseArray.length == resultCount) {
              resolve(resultArray)
            }
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  };
  Promise.race = function (promiseArray) {
    return new Promise((resolve, reject) => {
      promiseArray.forEach(promise => {
        Promise.resolve(promise).then(resolve, reject);
      });
    });
  };
  window.Promise = Promise;
})(window);
