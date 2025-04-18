class ALXCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string');
        }
        if (typeof length !== 'number') {
            throw new Error('Length must be a number');
        }
        if (!Array.isArray(students)) {
            throw new Error('Students must be an array');
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students;
    }

    set name(name) {
        this._name = name;
    }

    set length(length) {
        this._length = length;
    }

    set students(students) {
        this._students = students;
    }
}
export default ALXCourse;
