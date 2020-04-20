import { uuid } from 'uuidv4';

interface AppointmentConstructor {
  type: 'income' | 'outcome';
  value: number;
  title: string;
}

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, value, type }: Omit<AppointmentConstructor, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
