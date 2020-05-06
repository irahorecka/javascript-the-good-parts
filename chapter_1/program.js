document.writeln('Hello, World!')  // display text to program.html

// a simple way to define methods
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};