export class ToDo {
    constructor(
        public id: string = null, public text: string = '',
        public done: boolean = false, public userId: string = '', public updated?: Date
    ) {
        if (!updated) {
            this.updated = new Date();
        }
    }
}
