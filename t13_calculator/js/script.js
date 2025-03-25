function Calculator() {
    this.result = 0;

    this.init = function (num) {
        this.result = num;
        return this;
    };

    this.add = function (num) {
        this.result += num;
        return this;
    };

    this.sub = function (num) {
        this.result -= num;
        return this;
    };

    this.mul = function (num) {
        this.result *= num;
        return this;
    };

    this.div = function (num) {
        if (num !== 0) {
            this.result /= num;
        } else {
            alert("Division by zero is not allowed.");
        }
        return this;
    };

    this.alert = function () {
        setTimeout(() => {
            alert(this.result);
        }, 5000);
    };
}
