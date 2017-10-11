export interface EventModel {
    id: number;
    name: string;
    description: string;
    percentage: number;
}

export interface CreateEventModel {
    name?: string;
    description?: string;
}
