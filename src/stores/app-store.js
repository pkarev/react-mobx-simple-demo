import {observable, action} from 'mobx';

export default class AppStore {
    nextId = 0;
    @observable rows = {};

    constructor(rows) {
        if (rows) {
            this.rows = rows;
            this.nextId = Number(Object.keys(rows)[Object.keys(rows).length - 1]) + 1;
        }

    }

    @action.bound
    addRow()
    {
        this.rows[this.nextId] = this.nextId;
        this.nextId++;
    }

    @action.bound
    deleteRow(id)
    {
        delete this.rows[id];
    }

    @action.bound
    updateRow(id, value)
    {
        this.rows[id] = value;
    }
}
