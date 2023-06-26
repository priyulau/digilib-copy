// Data and View
export interface ViewInterface {
    updateBookView(book: BookInterface): void
    refreshView(section: string, DOMElement: HTMLDivElement): void
}
export interface UserInterface {
    addUser(user: { firstName: string, lastName: string, email: string }, datastore: DataStoreInterface): boolean;
    getUserByID(id: number): UserInterface
}

export interface StaffInterface {
    removePatronById(id: number): boolean | Error
}

export interface PatronInterface {
    donate(amount: number): boolean | Error
}

export interface LibraryInterface {
    getFullName(): string;
    getFullAddress(): string;
    getPatronCount(): number;
}

export interface BookInterface {
    getFullDescription(): string;
}

