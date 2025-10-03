// Fake data for menu items
import Rectangle1 from '../../assets/images/Rectangle 36.png';
import Rectangle2 from '../../assets/images/Rectangle 36 (1).png';
import Rectangle3 from '../../assets/images/Rectangle 36 (2).png';
import Rectangle4 from '../../assets/images/Rectangle 36 (3).png';
export interface ImenuItem {
        id: number,
        name: string,
        note: string,
        price: number,
        currency: string,
        image: string,
}
export const menuItems :ImenuItem[] = [
    {
        id: 1,
        name: 'Salad Tuna',
        note: '(Must choose level)',
        price: 500.67,
        currency: 'GNF',
        image: Rectangle1,
    },
    {
        id: 2,
        name: 'Salad Egg',
        note: '',
        price: 300.99,
        currency: 'GNF',
        image: Rectangle2,
    },
    {
        id: 3,
        name: 'Wagyu Sate',
        note: '',
        price: 270.32,
        currency: 'GNF',
        image: Rectangle3,
    },
    {
        id: 4,
        name: 'Wagyu Black Paper',
        note: '(Must choose level)',
        price: 34.98,
        currency: 'GNF',
        image: Rectangle4,
    },
];
