export interface EventModel {
    id: string;
    name: string;
    description: string;
    percentage: number;
}

export interface CreateEventModel {
    name?: string;
    description?: string;
}
