export interface Repository {
    findById(id: string): Promise<object | null>;
    create(id: string): Promise<object | null>;
    update(id: string): Promise<object | null>;
    delete(id: string): Promise<object | null>;
}