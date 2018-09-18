function DBM(pro_title) {
    this.db = [];
    this.name = pro_title;
    this.add = function (data) {
        data.id = this.db.length;
        this.db.push(data);
        this.write();
        return this;
    };
    this.read = function () {
        this.db = JSON.parse(localStorage.getItem(this.name));
        if (!Array.isArray(this.db)) {
            this.db = [null];
            this.write();
        }
    };
    this.write = function () {
        localStorage.setItem(this.name, JSON.stringify(this.db));
    };
    this.update = function (data) {
        if (typeof data.id == "undefined") {
            this.add(data);
        }
        this.db[data.id] = data;
        this.write();
        return this;
    };
    this.get = function (id) {
        /* if (typeof this.db[id] == undefined) {
             return null;
         }*/
        return this.db[id];
    };
    //-------------------------
    this.read();
}

var Project = function () {
    this.id = null;
    this.name = "";
    this.date = "";
    this.type = "";
    this.general = {};
    this.active_part = "";
    this.sewage_req = {};
    this.water_req = {};
    this.package_req = {};
    this.brand_sewage = "";
    this.brand_package = "";
    this.brand_water = "";
    this.sewage_res = {};
    this.package_res = {};
    this.water_res = {};
    this.sewage_fact = {};
    this.package_fact = {};


};