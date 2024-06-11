export interface Main {
    total:  number;
    issues: Issue[];
}

export interface Issue {
    _id:         string;
    title:       string;
    description: string;
    status:      string;
    __v:         number;
}
