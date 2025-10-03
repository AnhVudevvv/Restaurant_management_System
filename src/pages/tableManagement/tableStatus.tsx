// TypeScript interface for table status
export interface TableStatus {
    id?: number;
    name?: string;
    status: 'free' | 'using' | 'reserved';
}
// Fake data for 30 tables with random status

export const tableStatus : TableStatus[] = [
    { id: 1, name: 'B1', status: 'reserved' },
    { id: 2, name: 'B2', status: 'free' },
    { id: 3, name: 'B3', status: 'free' },
    { id: 4, name: 'B4', status: 'free' },
    { id: 5, name: 'B1', status: 'free' },
    { id: 6, name: 'B1', status: 'using' },
    { id: 7, name: 'B2', status: 'reserved' },
    { id: 8, name: 'B3', status: 'free' },
    { id: 9, name: 'B4', status: 'free' },
    { id: 10, name: 'B1', status: 'free' },
    { id: 11, name: 'B1', status: 'free' },
    { id: 12, name: 'B2', status: 'using' },
    { id: 13, name: 'B3', status: 'reserved' },
    { id: 14, name: 'B4', status: 'free' },
    { id: 15, name: 'B1', status: 'free' },
    { id: 16, name: 'B1', status: 'free' },
    { id: 17, name: 'B2', status: 'free' },
    { id: 18, name: 'B3', status: 'using' },
    { id: 19, name: 'B4', status: 'free' },
    { id: 20, name: 'B1', status: 'reserved' },
    { id: 21, name: 'B1', status: 'free' },
    { id: 22, name: 'B2', status: 'free' },
    { id: 23, name: 'B3', status: 'free' },
    { id: 24, name: 'B4', status: 'using' },
    { id: 25, name: 'B1', status: 'free' },
    { id: 26, name: 'B1', status: 'reserved' },
    { id: 27, name: 'B2', status: 'free' },
    { id: 28, name: 'B3', status: 'free' },
    { id: 29, name: 'B4', status: 'using' },
    { id: 30, name: 'B1', status: 'free' },
];
