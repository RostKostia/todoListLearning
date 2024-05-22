

export interface taskListNoteProps {
    id: number;
    name: string;
    text: string;
    check: boolean;
}

export const NoteState:taskListNoteProps[] = [{
    id: 1,
    name: 'Buy Beer',
    text: 'Go to Alpamega, buy Corona ',
    check: true,
},{
    id: 2,
    name: 'Pet cat',
    text: 'Just pet cat',
    check: false,
},{
    id: 3,
    name: 'Lorem ipsum',
    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
    check: false,
}]


