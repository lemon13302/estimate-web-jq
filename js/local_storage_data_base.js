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

var project = {
    id: null,
    name: "",
    date: "",
    general: {},
    sewage_req: {},
    water_req: {},
    package_req: {},
    brand_sewage: "",
    brand_package: "",
    brand_water: "",
    sewage_res: {},
    package_res: {},
    water_res: {},
    sewage_fact: {},
    water_fact: {},
    brand_fact: {}
};