import {observable, action} from 'mobx';

export default class AppStore {
    @observable rows = [];

    @action.bound
    addRow()
    {
        this.rows.push(`${this.rows.length}`);
    }

    @action.bound
    deleteRow(index)
    {
        this.rows.splice(index, 1);
    }

    @action.bound
    updateRow(value, index)
    {
        this.rows[index] = value;
    }
}
