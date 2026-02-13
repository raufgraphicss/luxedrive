export interface CarModel {
  id: string;
  name: string;
  year: number;
  specs: {
    hp: number;
    torque: number;
    acceleration: number; // 0-100 km/h
    topSpeed: number;
    engineType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid' | 'Plug-in Hybrid';
  };
  scores: {
    overall: number;
    comfort: number;
    speed: number;
    sportiness: number;
    travel: number;
    budgetFriendly: number;
    power: number;
  };
  price: string;
  image?: string;
}

export interface Brand {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  category: string;
  logo?: string;
  models: CarModel[];
}

const generateId = (brand: string, model: string): string => 
  `${brand.toLowerCase().replace(/\s+/g, '-')}-${model.toLowerCase().replace(/\s+/g, '-')}`;

export const brands: Brand[] = [
  // Group 1: Toyota, Volkswagen, Mercedes-Benz, BMW, Audi, Tesla, Ford, Honda, Porsche, Hyundai
  {
    id: 'toyota',
    name: 'Toyota',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Genel',
    models: [
      { id: generateId('Toyota', 'Corolla'), name: 'Corolla', year: 2024, specs: { hp: 169, torque: 203, acceleration: 8.9, topSpeed: 200, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 9, power: 5 }, price: '€28,000' },
      { id: generateId('Toyota', 'Camry'), name: 'Camry', year: 2024, specs: { hp: 225, torque: 221, acceleration: 7.5, topSpeed: 210, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 7, power: 6 }, price: '€42,000' },
      { id: generateId('Toyota', 'Supra'), name: 'GR Supra', year: 2024, specs: { hp: 382, torque: 500, acceleration: 4.1, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 9, sportiness: 10, travel: 5, budgetFriendly: 4, power: 9 }, price: '€65,000' },
      { id: generateId('Toyota', 'RAV4'), name: 'RAV4', year: 2024, specs: { hp: 219, torque: 221, acceleration: 8.1, topSpeed: 180, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 7, power: 6 }, price: '€45,000' },
      { id: generateId('Toyota', 'Land Cruiser'), name: 'Land Cruiser', year: 2024, specs: { hp: 415, torque: 650, acceleration: 6.7, topSpeed: 210, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 7, sportiness: 6, travel: 10, budgetFriendly: 3, power: 8 }, price: '€120,000' },
      { id: generateId('Toyota', 'GR86'), name: 'GR86', year: 2024, specs: { hp: 234, torque: 250, acceleration: 6.3, topSpeed: 226, engineType: 'Petrol' }, scores: { overall: 8, comfort: 6, speed: 8, sportiness: 9, travel: 4, budgetFriendly: 7, power: 7 }, price: '€35,000' },
      { id: generateId('Toyota', 'Crown'), name: 'Crown', year: 2024, specs: { hp: 340, torque: 400, acceleration: 5.7, topSpeed: 225, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 8, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Toyota', 'bZ4X'), name: 'bZ4X', year: 2024, specs: { hp: 218, torque: 336, acceleration: 6.9, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 7, comfort: 8, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 6, power: 6 }, price: '€50,000' },
    ]
  },
  {
    id: 'volkswagen',
    name: 'Volkswagen',
    country: 'Almanya',
    countryCode: 'DE',
    category: 'Genel',
    models: [
      { id: generateId('Volkswagen', 'Golf'), name: 'Golf', year: 2024, specs: { hp: 150, torque: 250, acceleration: 8.5, topSpeed: 224, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 7, power: 6 }, price: '€32,000' },
      { id: generateId('Volkswagen', 'Golf R'), name: 'Golf R', year: 2024, specs: { hp: 333, torque: 420, acceleration: 4.6, topSpeed: 270, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 9, sportiness: 9, travel: 7, budgetFriendly: 5, power: 9 }, price: '€55,000' },
      { id: generateId('Volkswagen', 'Passat'), name: 'Passat', year: 2024, specs: { hp: 200, torque: 320, acceleration: 7.2, topSpeed: 232, engineType: 'Petrol' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€45,000' },
      { id: generateId('Volkswagen', 'Tiguan'), name: 'Tiguan', year: 2024, specs: { hp: 204, torque: 320, acceleration: 7.4, topSpeed: 220, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€42,000' },
      { id: generateId('Volkswagen', 'Touareg'), name: 'Touareg', year: 2024, specs: { hp: 340, torque: 450, acceleration: 5.9, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 9, budgetFriendly: 4, power: 8 }, price: '€85,000' },
      { id: generateId('Volkswagen', 'ID.4'), name: 'ID.4', year: 2024, specs: { hp: 286, torque: 545, acceleration: 6.2, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 8, budgetFriendly: 6, power: 7 }, price: '€52,000' },
      { id: generateId('Volkswagen', 'ID.7'), name: 'ID.7', year: 2024, specs: { hp: 286, torque: 545, acceleration: 6.5, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 7 }, price: '€60,000' },
      { id: generateId('Volkswagen', 'Arteon'), name: 'Arteon', year: 2024, specs: { hp: 280, torque: 350, acceleration: 5.6, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 5, power: 7 }, price: '€58,000' },
    ]
  },
  {
    id: 'mercedes-benz',
    name: 'Mercedes-Benz',
    country: 'Almanya',
    countryCode: 'DE',
    category: 'Lüks',
    models: [
      { id: generateId('Mercedes', 'A-Class'), name: 'A-Class', year: 2024, specs: { hp: 163, torque: 250, acceleration: 8.4, topSpeed: 225, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 7, budgetFriendly: 5, power: 6 }, price: '€38,000' },
      { id: generateId('Mercedes', 'C-Class'), name: 'C-Class', year: 2024, specs: { hp: 258, torque: 400, acceleration: 6.0, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 4, power: 7 }, price: '€55,000' },
      { id: generateId('Mercedes', 'E-Class'), name: 'E-Class', year: 2024, specs: { hp: 312, torque: 550, acceleration: 5.2, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 10, speed: 8, sportiness: 6, travel: 9, budgetFriendly: 3, power: 8 }, price: '€72,000' },
      { id: generateId('Mercedes', 'S-Class'), name: 'S-Class', year: 2024, specs: { hp: 503, torque: 700, acceleration: 4.4, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 6, travel: 10, budgetFriendly: 1, power: 9 }, price: '€130,000' },
      { id: generateId('Mercedes', 'AMG GT'), name: 'AMG GT', year: 2024, specs: { hp: 585, torque: 800, acceleration: 3.2, topSpeed: 315, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 10, sportiness: 10, travel: 4, budgetFriendly: 1, power: 10 }, price: '€175,000' },
      { id: generateId('Mercedes', 'GLE'), name: 'GLE', year: 2024, specs: { hp: 381, torque: 480, acceleration: 5.7, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 9, budgetFriendly: 2, power: 8 }, price: '€95,000' },
      { id: generateId('Mercedes', 'G-Class'), name: 'G-Class', year: 2024, specs: { hp: 585, torque: 850, acceleration: 4.5, topSpeed: 220, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 8, sportiness: 7, travel: 9, budgetFriendly: 1, power: 10 }, price: '€180,000' },
      { id: generateId('Mercedes', 'EQS'), name: 'EQS', year: 2024, specs: { hp: 658, torque: 950, acceleration: 4.3, topSpeed: 210, engineType: 'Electric' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 6, travel: 9, budgetFriendly: 1, power: 9 }, price: '€150,000' },
      { id: generateId('Mercedes', 'Maybach S-Class'), name: 'Maybach S-Class', year: 2024, specs: { hp: 621, torque: 900, acceleration: 4.8, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 10, speed: 8, sportiness: 4, travel: 10, budgetFriendly: 1, power: 9 }, price: '€250,000' },
    ]
  },
  {
    id: 'bmw',
    name: 'BMW',
    country: 'Almanya',
    countryCode: 'DE',
    category: 'Lüks',
    models: [
      { id: generateId('BMW', '3 Series'), name: '3 Series', year: 2024, specs: { hp: 258, torque: 400, acceleration: 5.8, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 8, sportiness: 8, travel: 8, budgetFriendly: 4, power: 7 }, price: '€52,000' },
      { id: generateId('BMW', '5 Series'), name: '5 Series', year: 2024, specs: { hp: 340, torque: 450, acceleration: 5.1, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 9, budgetFriendly: 3, power: 8 }, price: '€70,000' },
      { id: generateId('BMW', '7 Series'), name: '7 Series', year: 2024, specs: { hp: 536, torque: 750, acceleration: 4.2, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 6, travel: 10, budgetFriendly: 1, power: 9 }, price: '€125,000' },
      { id: generateId('BMW', 'M3'), name: 'M3', year: 2024, specs: { hp: 510, torque: 650, acceleration: 3.5, topSpeed: 290, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 10, sportiness: 10, travel: 5, budgetFriendly: 2, power: 10 }, price: '€95,000' },
      { id: generateId('BMW', 'M5'), name: 'M5', year: 2024, specs: { hp: 727, torque: 1000, acceleration: 3.0, topSpeed: 305, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 10, travel: 7, budgetFriendly: 1, power: 10 }, price: '€145,000' },
      { id: generateId('BMW', 'X5'), name: 'X5', year: 2024, specs: { hp: 381, torque: 520, acceleration: 5.2, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 9, budgetFriendly: 2, power: 8 }, price: '€90,000' },
      { id: generateId('BMW', 'X7'), name: 'X7', year: 2024, specs: { hp: 530, torque: 750, acceleration: 4.7, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 10, speed: 8, sportiness: 5, travel: 10, budgetFriendly: 1, power: 9 }, price: '€120,000' },
      { id: generateId('BMW', 'iX'), name: 'iX', year: 2024, specs: { hp: 523, torque: 765, acceleration: 4.6, topSpeed: 200, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 8, budgetFriendly: 2, power: 9 }, price: '€110,000' },
      { id: generateId('BMW', 'i7'), name: 'i7', year: 2024, specs: { hp: 544, torque: 745, acceleration: 4.5, topSpeed: 240, engineType: 'Electric' }, scores: { overall: 10, comfort: 10, speed: 8, sportiness: 5, travel: 9, budgetFriendly: 1, power: 9 }, price: '€145,000' },
      { id: generateId('BMW', 'Z4'), name: 'Z4', year: 2024, specs: { hp: 340, torque: 500, acceleration: 4.5, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 9, sportiness: 9, travel: 4, budgetFriendly: 3, power: 8 }, price: '€65,000' },
    ]
  },
  {
    id: 'audi',
    name: 'Audi',
    country: 'Almanya',
    countryCode: 'DE',
    category: 'Lüks',
    models: [
      { id: generateId('Audi', 'A3'), name: 'A3', year: 2024, specs: { hp: 150, torque: 250, acceleration: 8.4, topSpeed: 224, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 7, budgetFriendly: 6, power: 6 }, price: '€36,000' },
      { id: generateId('Audi', 'A4'), name: 'A4', year: 2024, specs: { hp: 204, torque: 320, acceleration: 6.8, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 5, power: 7 }, price: '€48,000' },
      { id: generateId('Audi', 'A6'), name: 'A6', year: 2024, specs: { hp: 265, torque: 400, acceleration: 5.9, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 9, budgetFriendly: 4, power: 7 }, price: '€65,000' },
      { id: generateId('Audi', 'A8'), name: 'A8', year: 2024, specs: { hp: 460, torque: 700, acceleration: 4.4, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 5, travel: 10, budgetFriendly: 1, power: 9 }, price: '€115,000' },
      { id: generateId('Audi', 'RS6'), name: 'RS6 Avant', year: 2024, specs: { hp: 621, torque: 850, acceleration: 3.4, topSpeed: 305, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 10, travel: 8, budgetFriendly: 1, power: 10 }, price: '€145,000' },
      { id: generateId('Audi', 'R8'), name: 'R8', year: 2024, specs: { hp: 620, torque: 580, acceleration: 3.1, topSpeed: 331, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€200,000' },
      { id: generateId('Audi', 'Q5'), name: 'Q5', year: 2024, specs: { hp: 265, torque: 370, acceleration: 6.1, topSpeed: 237, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 6, travel: 9, budgetFriendly: 4, power: 7 }, price: '€58,000' },
      { id: generateId('Audi', 'Q7'), name: 'Q7', year: 2024, specs: { hp: 340, torque: 500, acceleration: 5.6, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 5, travel: 10, budgetFriendly: 3, power: 8 }, price: '€85,000' },
      { id: generateId('Audi', 'e-tron GT'), name: 'e-tron GT', year: 2024, specs: { hp: 646, torque: 830, acceleration: 3.3, topSpeed: 250, engineType: 'Electric' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 9, travel: 7, budgetFriendly: 1, power: 10 }, price: '€140,000' },
      { id: generateId('Audi', 'Q8 e-tron'), name: 'Q8 e-tron', year: 2024, specs: { hp: 408, torque: 664, acceleration: 5.6, topSpeed: 200, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 8, budgetFriendly: 2, power: 8 }, price: '€95,000' },
    ]
  },
  {
    id: 'tesla',
    name: 'Tesla',
    country: 'ABD',
    countryCode: 'US',
    category: 'Elektrikli',
    models: [
      { id: generateId('Tesla', 'Model 3'), name: 'Model 3', year: 2024, specs: { hp: 366, torque: 493, acceleration: 4.4, topSpeed: 233, engineType: 'Electric' }, scores: { overall: 9, comfort: 8, speed: 9, sportiness: 8, travel: 8, budgetFriendly: 6, power: 8 }, price: '€45,000' },
      { id: generateId('Tesla', 'Model Y'), name: 'Model Y', year: 2024, specs: { hp: 393, torque: 493, acceleration: 5.0, topSpeed: 217, engineType: 'Electric' }, scores: { overall: 9, comfort: 8, speed: 8, sportiness: 7, travel: 9, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Tesla', 'Model S'), name: 'Model S', year: 2024, specs: { hp: 670, torque: 800, acceleration: 3.2, topSpeed: 250, engineType: 'Electric' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 9, travel: 8, budgetFriendly: 2, power: 10 }, price: '€95,000' },
      { id: generateId('Tesla', 'Model S Plaid'), name: 'Model S Plaid', year: 2024, specs: { hp: 1020, torque: 1050, acceleration: 2.1, topSpeed: 322, engineType: 'Electric' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 10, travel: 7, budgetFriendly: 1, power: 10 }, price: '€140,000' },
      { id: generateId('Tesla', 'Model X'), name: 'Model X', year: 2024, specs: { hp: 670, torque: 800, acceleration: 3.9, topSpeed: 250, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 9, sportiness: 7, travel: 9, budgetFriendly: 2, power: 9 }, price: '€105,000' },
      { id: generateId('Tesla', 'Cybertruck'), name: 'Cybertruck', year: 2024, specs: { hp: 845, torque: 1050, acceleration: 2.6, topSpeed: 209, engineType: 'Electric' }, scores: { overall: 8, comfort: 7, speed: 9, sportiness: 8, travel: 8, budgetFriendly: 2, power: 10 }, price: '€100,000' },
    ]
  },
  {
    id: 'ford',
    name: 'Ford',
    country: 'ABD',
    countryCode: 'US',
    category: 'Genel',
    models: [
      { id: generateId('Ford', 'Mustang'), name: 'Mustang', year: 2024, specs: { hp: 480, torque: 569, acceleration: 4.3, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 9, sportiness: 10, travel: 5, budgetFriendly: 4, power: 9 }, price: '€55,000' },
      { id: generateId('Ford', 'Mustang Mach-E'), name: 'Mustang Mach-E', year: 2024, specs: { hp: 487, torque: 813, acceleration: 3.7, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 5, power: 9 }, price: '€65,000' },
      { id: generateId('Ford', 'F-150'), name: 'F-150', year: 2024, specs: { hp: 400, torque: 678, acceleration: 5.5, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Ford', 'Bronco'), name: 'Bronco', year: 2024, specs: { hp: 300, torque: 440, acceleration: 7.0, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 6, sportiness: 7, travel: 9, budgetFriendly: 5, power: 7 }, price: '€45,000' },
      { id: generateId('Ford', 'Explorer'), name: 'Explorer', year: 2024, specs: { hp: 340, torque: 475, acceleration: 6.0, topSpeed: 210, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 7 }, price: '€52,000' },
      { id: generateId('Ford', 'GT'), name: 'GT', year: 2024, specs: { hp: 660, torque: 746, acceleration: 3.0, topSpeed: 348, engineType: 'Petrol' }, scores: { overall: 10, comfort: 5, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€500,000' },
      { id: generateId('Ford', 'Puma'), name: 'Puma', year: 2024, specs: { hp: 155, torque: 240, acceleration: 8.7, topSpeed: 195, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 7, speed: 6, sportiness: 6, travel: 8, budgetFriendly: 7, power: 5 }, price: '€28,000' },
    ]
  },
  {
    id: 'honda',
    name: 'Honda',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Genel',
    models: [
      { id: generateId('Honda', 'Civic'), name: 'Civic', year: 2024, specs: { hp: 182, torque: 240, acceleration: 7.3, topSpeed: 215, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 7, travel: 8, budgetFriendly: 7, power: 6 }, price: '€32,000' },
      { id: generateId('Honda', 'Civic Type R'), name: 'Civic Type R', year: 2024, specs: { hp: 329, torque: 420, acceleration: 5.4, topSpeed: 275, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 9, sportiness: 10, travel: 6, budgetFriendly: 4, power: 9 }, price: '€52,000' },
      { id: generateId('Honda', 'Accord'), name: 'Accord', year: 2024, specs: { hp: 204, torque: 260, acceleration: 7.2, topSpeed: 210, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€38,000' },
      { id: generateId('Honda', 'CR-V'), name: 'CR-V', year: 2024, specs: { hp: 204, torque: 335, acceleration: 7.8, topSpeed: 190, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€42,000' },
      { id: generateId('Honda', 'HR-V'), name: 'HR-V', year: 2024, specs: { hp: 131, torque: 253, acceleration: 10.6, topSpeed: 170, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 4, travel: 8, budgetFriendly: 8, power: 4 }, price: '€32,000' },
      { id: generateId('Honda', 'NSX'), name: 'NSX', year: 2024, specs: { hp: 600, torque: 645, acceleration: 2.9, topSpeed: 307, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€190,000' },
      { id: generateId('Honda', 'e:Ny1'), name: 'e:Ny1', year: 2024, specs: { hp: 204, torque: 310, acceleration: 7.6, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 7, comfort: 8, speed: 6, sportiness: 5, travel: 7, budgetFriendly: 5, power: 6 }, price: '€48,000' },
    ]
  },
  {
    id: 'porsche',
    name: 'Porsche',
    country: 'Almanya',
    countryCode: 'DE',
    category: 'Süper Spor',
    models: [
      { id: generateId('Porsche', '911'), name: '911 Carrera', year: 2024, specs: { hp: 394, torque: 450, acceleration: 4.2, topSpeed: 293, engineType: 'Petrol' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 10, travel: 6, budgetFriendly: 2, power: 9 }, price: '€130,000' },
      { id: generateId('Porsche', '911 Turbo S'), name: '911 Turbo S', year: 2024, specs: { hp: 650, torque: 800, acceleration: 2.7, topSpeed: 330, engineType: 'Petrol' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 10, travel: 5, budgetFriendly: 1, power: 10 }, price: '€240,000' },
      { id: generateId('Porsche', '911 GT3'), name: '911 GT3', year: 2024, specs: { hp: 510, torque: 470, acceleration: 3.4, topSpeed: 318, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€220,000' },
      { id: generateId('Porsche', '718 Cayman'), name: '718 Cayman', year: 2024, specs: { hp: 300, torque: 380, acceleration: 5.1, topSpeed: 275, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 9, sportiness: 10, travel: 4, budgetFriendly: 3, power: 8 }, price: '€75,000' },
      { id: generateId('Porsche', 'Taycan'), name: 'Taycan', year: 2024, specs: { hp: 476, torque: 650, acceleration: 4.0, topSpeed: 250, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 9, sportiness: 8, travel: 7, budgetFriendly: 2, power: 9 }, price: '€100,000' },
      { id: generateId('Porsche', 'Taycan Turbo S'), name: 'Taycan Turbo S', year: 2024, specs: { hp: 761, torque: 1050, acceleration: 2.8, topSpeed: 260, engineType: 'Electric' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 9, travel: 6, budgetFriendly: 1, power: 10 }, price: '€190,000' },
      { id: generateId('Porsche', 'Panamera'), name: 'Panamera', year: 2024, specs: { hp: 473, torque: 620, acceleration: 4.1, topSpeed: 280, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 8, travel: 8, budgetFriendly: 1, power: 9 }, price: '€125,000' },
      { id: generateId('Porsche', 'Cayenne'), name: 'Cayenne', year: 2024, specs: { hp: 353, torque: 500, acceleration: 5.4, topSpeed: 248, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 9, budgetFriendly: 2, power: 8 }, price: '€95,000' },
      { id: generateId('Porsche', 'Cayenne Turbo GT'), name: 'Cayenne Turbo GT', year: 2024, specs: { hp: 659, torque: 850, acceleration: 3.3, topSpeed: 300, engineType: 'Petrol' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 9, travel: 7, budgetFriendly: 1, power: 10 }, price: '€215,000' },
      { id: generateId('Porsche', 'Macan'), name: 'Macan', year: 2024, specs: { hp: 380, torque: 520, acceleration: 4.5, topSpeed: 267, engineType: 'Electric' }, scores: { overall: 9, comfort: 8, speed: 9, sportiness: 8, travel: 8, budgetFriendly: 3, power: 8 }, price: '€80,000' },
    ]
  },
  {
    id: 'hyundai',
    name: 'Hyundai',
    country: 'Güney Kore',
    countryCode: 'KR',
    category: 'Genel',
    models: [
      { id: generateId('Hyundai', 'i20'), name: 'i20', year: 2024, specs: { hp: 100, torque: 172, acceleration: 11.5, topSpeed: 178, engineType: 'Petrol' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 4, travel: 7, budgetFriendly: 9, power: 4 }, price: '€18,000' },
      { id: generateId('Hyundai', 'i20 N'), name: 'i20 N', year: 2024, specs: { hp: 204, torque: 275, acceleration: 6.2, topSpeed: 230, engineType: 'Petrol' }, scores: { overall: 8, comfort: 6, speed: 8, sportiness: 9, travel: 5, budgetFriendly: 6, power: 7 }, price: '€32,000' },
      { id: generateId('Hyundai', 'Tucson'), name: 'Tucson', year: 2024, specs: { hp: 230, torque: 350, acceleration: 8.0, topSpeed: 193, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€38,000' },
      { id: generateId('Hyundai', 'Santa Fe'), name: 'Santa Fe', year: 2024, specs: { hp: 280, torque: 440, acceleration: 7.2, topSpeed: 200, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 7 }, price: '€52,000' },
      { id: generateId('Hyundai', 'Ioniq 5'), name: 'Ioniq 5', year: 2024, specs: { hp: 325, torque: 605, acceleration: 5.2, topSpeed: 185, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 5, power: 8 }, price: '€52,000' },
      { id: generateId('Hyundai', 'Ioniq 6'), name: 'Ioniq 6', year: 2024, specs: { hp: 325, torque: 605, acceleration: 5.1, topSpeed: 185, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Hyundai', 'Kona'), name: 'Kona', year: 2024, specs: { hp: 204, torque: 255, acceleration: 7.8, topSpeed: 185, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 8, budgetFriendly: 6, power: 6 }, price: '€42,000' },
      { id: generateId('Hyundai', 'N Vision 74'), name: 'N Vision 74', year: 2025, specs: { hp: 680, torque: 900, acceleration: 3.5, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 4, budgetFriendly: 1, power: 10 }, price: '€200,000' },
    ]
  },
  // Group 2: Kia, Ferrari, Lamborghini, Lexus, Volvo, Land Rover, Chevrolet, Nissan, Mazda, Subaru
  {
    id: 'kia',
    name: 'Kia',
    country: 'Güney Kore',
    countryCode: 'KR',
    category: 'Genel',
    models: [
      { id: generateId('Kia', 'Ceed'), name: 'Ceed', year: 2024, specs: { hp: 160, torque: 253, acceleration: 8.4, topSpeed: 210, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 8, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 7, power: 5 }, price: '€28,000' },
      { id: generateId('Kia', 'Stinger'), name: 'Stinger', year: 2024, specs: { hp: 368, torque: 510, acceleration: 4.9, topSpeed: 270, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 9, sportiness: 9, travel: 7, budgetFriendly: 5, power: 9 }, price: '€55,000' },
      { id: generateId('Kia', 'Sportage'), name: 'Sportage', year: 2024, specs: { hp: 230, torque: 350, acceleration: 8.0, topSpeed: 193, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€38,000' },
      { id: generateId('Kia', 'Sorento'), name: 'Sorento', year: 2024, specs: { hp: 280, torque: 440, acceleration: 7.5, topSpeed: 200, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 7 }, price: '€52,000' },
      { id: generateId('Kia', 'EV6'), name: 'EV6', year: 2024, specs: { hp: 325, torque: 605, acceleration: 5.2, topSpeed: 185, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 5, power: 8 }, price: '€52,000' },
      { id: generateId('Kia', 'EV6 GT'), name: 'EV6 GT', year: 2024, specs: { hp: 585, torque: 740, acceleration: 3.5, topSpeed: 260, engineType: 'Electric' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 9, travel: 7, budgetFriendly: 3, power: 10 }, price: '€75,000' },
      { id: generateId('Kia', 'EV9'), name: 'EV9', year: 2024, specs: { hp: 380, torque: 700, acceleration: 5.3, topSpeed: 200, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 5, travel: 9, budgetFriendly: 4, power: 8 }, price: '€75,000' },
    ]
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    country: 'İtalya',
    countryCode: 'IT',
    category: 'Süper Spor',
    models: [
      { id: generateId('Ferrari', 'Roma'), name: 'Roma', year: 2024, specs: { hp: 620, torque: 760, acceleration: 3.4, topSpeed: 320, engineType: 'Petrol' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 9, travel: 5, budgetFriendly: 1, power: 10 }, price: '€250,000' },
      { id: generateId('Ferrari', '296 GTB'), name: '296 GTB', year: 2024, specs: { hp: 830, torque: 740, acceleration: 2.9, topSpeed: 330, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€320,000' },
      { id: generateId('Ferrari', 'F8 Tributo'), name: 'F8 Tributo', year: 2024, specs: { hp: 720, torque: 770, acceleration: 2.9, topSpeed: 340, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€290,000' },
      { id: generateId('Ferrari', 'SF90 Stradale'), name: 'SF90 Stradale', year: 2024, specs: { hp: 1000, torque: 900, acceleration: 2.5, topSpeed: 340, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€520,000' },
      { id: generateId('Ferrari', '812 Superfast'), name: '812 Superfast', year: 2024, specs: { hp: 800, torque: 718, acceleration: 2.9, topSpeed: 340, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 4, budgetFriendly: 1, power: 10 }, price: '€390,000' },
      { id: generateId('Ferrari', 'Purosangue'), name: 'Purosangue', year: 2024, specs: { hp: 725, torque: 716, acceleration: 3.3, topSpeed: 310, engineType: 'Petrol' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 8, travel: 8, budgetFriendly: 1, power: 10 }, price: '€420,000' },
      { id: generateId('Ferrari', 'Daytona SP3'), name: 'Daytona SP3', year: 2024, specs: { hp: 840, torque: 697, acceleration: 2.8, topSpeed: 340, engineType: 'Petrol' }, scores: { overall: 10, comfort: 5, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€2,300,000' },
    ]
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    country: 'İtalya',
    countryCode: 'IT',
    category: 'Süper Spor',
    models: [
      { id: generateId('Lamborghini', 'Huracán'), name: 'Huracán EVO', year: 2024, specs: { hp: 640, torque: 600, acceleration: 2.9, topSpeed: 325, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€240,000' },
      { id: generateId('Lamborghini', 'Huracán Tecnica'), name: 'Huracán Tecnica', year: 2024, specs: { hp: 640, torque: 565, acceleration: 3.2, topSpeed: 325, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€260,000' },
      { id: generateId('Lamborghini', 'Huracán STO'), name: 'Huracán STO', year: 2024, specs: { hp: 640, torque: 565, acceleration: 3.0, topSpeed: 310, engineType: 'Petrol' }, scores: { overall: 10, comfort: 5, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€330,000' },
      { id: generateId('Lamborghini', 'Revuelto'), name: 'Revuelto', year: 2024, specs: { hp: 1015, torque: 850, acceleration: 2.5, topSpeed: 350, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€550,000' },
      { id: generateId('Lamborghini', 'Urus'), name: 'Urus', year: 2024, specs: { hp: 666, torque: 850, acceleration: 3.5, topSpeed: 305, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 9, travel: 8, budgetFriendly: 1, power: 10 }, price: '€250,000' },
      { id: generateId('Lamborghini', 'Urus Performante'), name: 'Urus Performante', year: 2024, specs: { hp: 666, torque: 850, acceleration: 3.3, topSpeed: 306, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 7, budgetFriendly: 1, power: 10 }, price: '€290,000' },
    ]
  },
  {
    id: 'lexus',
    name: 'Lexus',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Lüks',
    models: [
      { id: generateId('Lexus', 'ES'), name: 'ES', year: 2024, specs: { hp: 218, torque: 221, acceleration: 8.1, topSpeed: 180, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 9, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 5, power: 6 }, price: '€55,000' },
      { id: generateId('Lexus', 'LS'), name: 'LS', year: 2024, specs: { hp: 359, torque: 350, acceleration: 5.4, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 10, speed: 8, sportiness: 5, travel: 10, budgetFriendly: 2, power: 8 }, price: '€120,000' },
      { id: generateId('Lexus', 'LC 500'), name: 'LC 500', year: 2024, specs: { hp: 471, torque: 540, acceleration: 4.4, topSpeed: 270, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 9, sportiness: 9, travel: 5, budgetFriendly: 2, power: 9 }, price: '€110,000' },
      { id: generateId('Lexus', 'LFA'), name: 'LFA', year: 2024, specs: { hp: 560, torque: 480, acceleration: 3.7, topSpeed: 325, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€400,000' },
      { id: generateId('Lexus', 'RX'), name: 'RX', year: 2024, specs: { hp: 366, torque: 550, acceleration: 6.0, topSpeed: 200, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 4, power: 8 }, price: '€75,000' },
      { id: generateId('Lexus', 'NX'), name: 'NX', year: 2024, specs: { hp: 309, torque: 520, acceleration: 6.3, topSpeed: 200, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 5, power: 7 }, price: '€60,000' },
      { id: generateId('Lexus', 'RZ'), name: 'RZ 450e', year: 2024, specs: { hp: 313, torque: 435, acceleration: 5.3, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 6, travel: 7, budgetFriendly: 4, power: 7 }, price: '€70,000' },
    ]
  },
  {
    id: 'volvo',
    name: 'Volvo',
    country: 'İsveç',
    countryCode: 'SE',
    category: 'Lüks',
    models: [
      { id: generateId('Volvo', 'S60'), name: 'S60', year: 2024, specs: { hp: 250, torque: 350, acceleration: 6.5, topSpeed: 210, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 5, power: 7 }, price: '€52,000' },
      { id: generateId('Volvo', 'S90'), name: 'S90', year: 2024, specs: { hp: 310, torque: 400, acceleration: 5.8, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 10, speed: 8, sportiness: 5, travel: 9, budgetFriendly: 4, power: 8 }, price: '€72,000' },
      { id: generateId('Volvo', 'XC40'), name: 'XC40', year: 2024, specs: { hp: 238, torque: 580, acceleration: 7.4, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 5, power: 7 }, price: '€55,000' },
      { id: generateId('Volvo', 'XC60'), name: 'XC60', year: 2024, specs: { hp: 250, torque: 350, acceleration: 6.9, topSpeed: 180, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 7 }, price: '€62,000' },
      { id: generateId('Volvo', 'XC90'), name: 'XC90', year: 2024, specs: { hp: 310, torque: 400, acceleration: 6.2, topSpeed: 180, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 10, speed: 7, sportiness: 5, travel: 10, budgetFriendly: 3, power: 8 }, price: '€85,000' },
      { id: generateId('Volvo', 'EX90'), name: 'EX90', year: 2024, specs: { hp: 517, torque: 910, acceleration: 4.9, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 9, comfort: 10, speed: 8, sportiness: 5, travel: 9, budgetFriendly: 2, power: 9 }, price: '€105,000' },
      { id: generateId('Volvo', 'Polestar 2'), name: 'Polestar 2', year: 2024, specs: { hp: 408, torque: 660, acceleration: 4.7, topSpeed: 205, engineType: 'Electric' }, scores: { overall: 9, comfort: 8, speed: 8, sportiness: 8, travel: 7, budgetFriendly: 4, power: 8 }, price: '€55,000' },
    ]
  },
  {
    id: 'land-rover',
    name: 'Land Rover',
    country: 'İngiltere',
    countryCode: 'GB',
    category: 'Lüks SUV',
    models: [
      { id: generateId('Land Rover', 'Defender'), name: 'Defender', year: 2024, specs: { hp: 400, torque: 550, acceleration: 6.0, topSpeed: 191, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 7, sportiness: 7, travel: 10, budgetFriendly: 2, power: 8 }, price: '€90,000' },
      { id: generateId('Land Rover', 'Discovery'), name: 'Discovery', year: 2024, specs: { hp: 360, torque: 500, acceleration: 6.5, topSpeed: 209, engineType: 'Hybrid' }, scores: { overall: 9, comfort: 9, speed: 7, sportiness: 5, travel: 10, budgetFriendly: 2, power: 8 }, price: '€85,000' },
      { id: generateId('Land Rover', 'Range Rover'), name: 'Range Rover', year: 2024, specs: { hp: 530, torque: 750, acceleration: 4.6, topSpeed: 250, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 10, speed: 8, sportiness: 6, travel: 10, budgetFriendly: 1, power: 9 }, price: '€180,000' },
      { id: generateId('Land Rover', 'Range Rover Sport'), name: 'Range Rover Sport', year: 2024, specs: { hp: 635, torque: 750, acceleration: 3.8, topSpeed: 290, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 9, speed: 9, sportiness: 8, travel: 9, budgetFriendly: 1, power: 10 }, price: '€150,000' },
      { id: generateId('Land Rover', 'Range Rover Velar'), name: 'Range Rover Velar', year: 2024, specs: { hp: 400, torque: 550, acceleration: 5.5, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 2, power: 8 }, price: '€95,000' },
      { id: generateId('Land Rover', 'Range Rover Evoque'), name: 'Range Rover Evoque', year: 2024, specs: { hp: 249, torque: 365, acceleration: 7.5, topSpeed: 217, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 7, budgetFriendly: 4, power: 7 }, price: '€55,000' },
    ]
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet',
    country: 'ABD',
    countryCode: 'US',
    category: 'Genel',
    models: [
      { id: generateId('Chevrolet', 'Camaro'), name: 'Camaro', year: 2024, specs: { hp: 455, torque: 617, acceleration: 4.2, topSpeed: 290, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 9, sportiness: 10, travel: 4, budgetFriendly: 4, power: 9 }, price: '€50,000' },
      { id: generateId('Chevrolet', 'Corvette'), name: 'Corvette', year: 2024, specs: { hp: 495, torque: 637, acceleration: 2.9, topSpeed: 312, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 4, budgetFriendly: 3, power: 10 }, price: '€75,000' },
      { id: generateId('Chevrolet', 'Corvette Z06'), name: 'Corvette Z06', year: 2024, specs: { hp: 670, torque: 623, acceleration: 2.6, topSpeed: 328, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€130,000' },
      { id: generateId('Chevrolet', 'Tahoe'), name: 'Tahoe', year: 2024, specs: { hp: 420, torque: 623, acceleration: 6.5, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 10, budgetFriendly: 4, power: 8 }, price: '€65,000' },
      { id: generateId('Chevrolet', 'Silverado'), name: 'Silverado', year: 2024, specs: { hp: 420, torque: 623, acceleration: 6.0, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Chevrolet', 'Bolt EV'), name: 'Bolt EV', year: 2024, specs: { hp: 200, torque: 360, acceleration: 6.5, topSpeed: 150, engineType: 'Electric' }, scores: { overall: 7, comfort: 7, speed: 6, sportiness: 5, travel: 7, budgetFriendly: 8, power: 6 }, price: '€32,000' },
    ]
  },
  {
    id: 'nissan',
    name: 'Nissan',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Genel',
    models: [
      { id: generateId('Nissan', 'GT-R'), name: 'GT-R', year: 2024, specs: { hp: 565, torque: 633, acceleration: 2.9, topSpeed: 315, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 4, budgetFriendly: 2, power: 10 }, price: '€130,000' },
      { id: generateId('Nissan', 'GT-R NISMO'), name: 'GT-R NISMO', year: 2024, specs: { hp: 600, torque: 652, acceleration: 2.5, topSpeed: 330, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€220,000' },
      { id: generateId('Nissan', 'Z'), name: 'Z', year: 2024, specs: { hp: 400, torque: 475, acceleration: 4.5, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 9, sportiness: 9, travel: 4, budgetFriendly: 4, power: 9 }, price: '€55,000' },
      { id: generateId('Nissan', 'Ariya'), name: 'Ariya', year: 2024, specs: { hp: 394, torque: 600, acceleration: 5.1, topSpeed: 200, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 8, sportiness: 6, travel: 8, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Nissan', 'Qashqai'), name: 'Qashqai', year: 2024, specs: { hp: 190, torque: 330, acceleration: 9.5, topSpeed: 183, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 8, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 7, power: 6 }, price: '€35,000' },
      { id: generateId('Nissan', 'X-Trail'), name: 'X-Trail', year: 2024, specs: { hp: 213, torque: 330, acceleration: 8.5, topSpeed: 180, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€42,000' },
      { id: generateId('Nissan', 'Patrol'), name: 'Patrol', year: 2024, specs: { hp: 425, torque: 560, acceleration: 6.0, topSpeed: 210, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 10, budgetFriendly: 4, power: 8 }, price: '€85,000' },
    ]
  },
  {
    id: 'mazda',
    name: 'Mazda',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Genel',
    models: [
      { id: generateId('Mazda', 'MX-5'), name: 'MX-5 Miata', year: 2024, specs: { hp: 181, torque: 205, acceleration: 6.5, topSpeed: 219, engineType: 'Petrol' }, scores: { overall: 9, comfort: 6, speed: 7, sportiness: 10, travel: 4, budgetFriendly: 7, power: 6 }, price: '€35,000' },
      { id: generateId('Mazda', 'Mazda3'), name: 'Mazda3', year: 2024, specs: { hp: 186, torque: 227, acceleration: 8.0, topSpeed: 210, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 7, travel: 7, budgetFriendly: 7, power: 6 }, price: '€28,000' },
      { id: generateId('Mazda', 'Mazda6'), name: 'Mazda6', year: 2024, specs: { hp: 231, torque: 420, acceleration: 7.1, topSpeed: 227, engineType: 'Diesel' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 6, power: 7 }, price: '€38,000' },
      { id: generateId('Mazda', 'CX-5'), name: 'CX-5', year: 2024, specs: { hp: 187, torque: 252, acceleration: 8.8, topSpeed: 195, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 7, power: 6 }, price: '€35,000' },
      { id: generateId('Mazda', 'CX-60'), name: 'CX-60', year: 2024, specs: { hp: 327, torque: 500, acceleration: 5.8, topSpeed: 195, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 6, travel: 9, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Mazda', 'CX-90'), name: 'CX-90', year: 2024, specs: { hp: 340, torque: 500, acceleration: 6.0, topSpeed: 200, engineType: 'Plug-in Hybrid' }, scores: { overall: 9, comfort: 9, speed: 7, sportiness: 5, travel: 10, budgetFriendly: 4, power: 8 }, price: '€65,000' },
    ]
  },
  {
    id: 'subaru',
    name: 'Subaru',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Genel',
    models: [
      { id: generateId('Subaru', 'WRX'), name: 'WRX', year: 2024, specs: { hp: 271, torque: 350, acceleration: 5.5, topSpeed: 240, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 8, sportiness: 9, travel: 6, budgetFriendly: 5, power: 8 }, price: '€45,000' },
      { id: generateId('Subaru', 'WRX STI'), name: 'WRX STI', year: 2024, specs: { hp: 310, torque: 400, acceleration: 4.8, topSpeed: 255, engineType: 'Petrol' }, scores: { overall: 9, comfort: 6, speed: 9, sportiness: 10, travel: 5, budgetFriendly: 4, power: 9 }, price: '€55,000' },
      { id: generateId('Subaru', 'BRZ'), name: 'BRZ', year: 2024, specs: { hp: 234, torque: 250, acceleration: 6.3, topSpeed: 226, engineType: 'Petrol' }, scores: { overall: 8, comfort: 6, speed: 8, sportiness: 9, travel: 4, budgetFriendly: 6, power: 7 }, price: '€35,000' },
      { id: generateId('Subaru', 'Outback'), name: 'Outback', year: 2024, specs: { hp: 260, torque: 376, acceleration: 7.5, topSpeed: 200, engineType: 'Petrol' }, scores: { overall: 8, comfort: 9, speed: 6, sportiness: 5, travel: 10, budgetFriendly: 5, power: 7 }, price: '€45,000' },
      { id: generateId('Subaru', 'Forester'), name: 'Forester', year: 2024, specs: { hp: 182, torque: 239, acceleration: 9.0, topSpeed: 188, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€38,000' },
      { id: generateId('Subaru', 'Solterra'), name: 'Solterra', year: 2024, specs: { hp: 218, torque: 336, acceleration: 6.9, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 7, comfort: 8, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 5, power: 6 }, price: '€52,000' },
    ]
  },
  // Group 3: Jeep, Peugeot, Renault, Fiat, Bentley, Rolls-Royce, Aston Martin, Maserati, Alfa Romeo, Jaguar
  {
    id: 'jeep',
    name: 'Jeep',
    country: 'ABD',
    countryCode: 'US',
    category: 'SUV',
    models: [
      { id: generateId('Jeep', 'Wrangler'), name: 'Wrangler', year: 2024, specs: { hp: 285, torque: 400, acceleration: 7.5, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 8, comfort: 6, speed: 6, sportiness: 7, travel: 10, budgetFriendly: 5, power: 7 }, price: '€55,000' },
      { id: generateId('Jeep', 'Gladiator'), name: 'Gladiator', year: 2024, specs: { hp: 285, torque: 400, acceleration: 8.0, topSpeed: 165, engineType: 'Petrol' }, scores: { overall: 8, comfort: 6, speed: 6, sportiness: 6, travel: 10, budgetFriendly: 5, power: 7 }, price: '€60,000' },
      { id: generateId('Jeep', 'Grand Cherokee'), name: 'Grand Cherokee', year: 2024, specs: { hp: 357, torque: 390, acceleration: 6.3, topSpeed: 195, engineType: 'Petrol' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 6, travel: 9, budgetFriendly: 4, power: 8 }, price: '€75,000' },
      { id: generateId('Jeep', 'Wagoneer'), name: 'Wagoneer', year: 2024, specs: { hp: 471, torque: 617, acceleration: 6.0, topSpeed: 195, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 7, sportiness: 5, travel: 10, budgetFriendly: 2, power: 9 }, price: '€95,000' },
      { id: generateId('Jeep', 'Compass'), name: 'Compass', year: 2024, specs: { hp: 200, torque: 260, acceleration: 8.5, topSpeed: 185, engineType: 'Plug-in Hybrid' }, scores: { overall: 7, comfort: 7, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 6, power: 6 }, price: '€42,000' },
      { id: generateId('Jeep', 'Avenger'), name: 'Avenger', year: 2024, specs: { hp: 156, torque: 260, acceleration: 9.0, topSpeed: 150, engineType: 'Electric' }, scores: { overall: 7, comfort: 7, speed: 6, sportiness: 5, travel: 7, budgetFriendly: 6, power: 5 }, price: '€40,000' },
    ]
  },
  {
    id: 'peugeot',
    name: 'Peugeot',
    country: 'Fransa',
    countryCode: 'FR',
    category: 'Genel',
    models: [
      { id: generateId('Peugeot', '208'), name: '208', year: 2024, specs: { hp: 136, torque: 260, acceleration: 8.1, topSpeed: 150, engineType: 'Electric' }, scores: { overall: 7, comfort: 7, speed: 6, sportiness: 5, travel: 7, budgetFriendly: 7, power: 5 }, price: '€35,000' },
      { id: generateId('Peugeot', '308'), name: '308', year: 2024, specs: { hp: 180, torque: 360, acceleration: 7.5, topSpeed: 235, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 6, power: 6 }, price: '€38,000' },
      { id: generateId('Peugeot', '508'), name: '508', year: 2024, specs: { hp: 225, torque: 360, acceleration: 7.9, topSpeed: 250, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 5, power: 7 }, price: '€48,000' },
      { id: generateId('Peugeot', '3008'), name: '3008', year: 2024, specs: { hp: 225, torque: 360, acceleration: 7.6, topSpeed: 235, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 7 }, price: '€45,000' },
      { id: generateId('Peugeot', '5008'), name: '5008', year: 2024, specs: { hp: 225, torque: 360, acceleration: 8.0, topSpeed: 233, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 7 }, price: '€50,000' },
      { id: generateId('Peugeot', 'e-208'), name: 'e-208', year: 2024, specs: { hp: 156, torque: 260, acceleration: 8.1, topSpeed: 150, engineType: 'Electric' }, scores: { overall: 7, comfort: 7, speed: 6, sportiness: 5, travel: 7, budgetFriendly: 6, power: 5 }, price: '€38,000' },
    ]
  },
  {
    id: 'renault',
    name: 'Renault',
    country: 'Fransa',
    countryCode: 'FR',
    category: 'Genel',
    models: [
      { id: generateId('Renault', 'Clio'), name: 'Clio', year: 2024, specs: { hp: 140, torque: 240, acceleration: 9.3, topSpeed: 190, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 7, speed: 6, sportiness: 5, travel: 7, budgetFriendly: 8, power: 5 }, price: '€22,000' },
      { id: generateId('Renault', 'Megane E-Tech'), name: 'Megane E-Tech', year: 2024, specs: { hp: 220, torque: 300, acceleration: 7.4, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 7, budgetFriendly: 5, power: 7 }, price: '€45,000' },
      { id: generateId('Renault', 'Austral'), name: 'Austral', year: 2024, specs: { hp: 200, torque: 300, acceleration: 8.4, topSpeed: 188, engineType: 'Hybrid' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 6, power: 6 }, price: '€38,000' },
      { id: generateId('Renault', 'Scenic E-Tech'), name: 'Scenic E-Tech', year: 2024, specs: { hp: 220, torque: 300, acceleration: 7.9, topSpeed: 170, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 8, budgetFriendly: 5, power: 7 }, price: '€48,000' },
      { id: generateId('Renault', 'Rafale'), name: 'Rafale', year: 2024, specs: { hp: 300, torque: 500, acceleration: 6.4, topSpeed: 184, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 4, power: 8 }, price: '€55,000' },
      { id: generateId('Renault', 'Alpine A110'), name: 'Alpine A110', year: 2024, specs: { hp: 300, torque: 340, acceleration: 4.2, topSpeed: 260, engineType: 'Petrol' }, scores: { overall: 9, comfort: 6, speed: 9, sportiness: 10, travel: 3, budgetFriendly: 3, power: 8 }, price: '€72,000' },
    ]
  },
  {
    id: 'fiat',
    name: 'Fiat',
    country: 'İtalya',
    countryCode: 'IT',
    category: 'Genel',
    models: [
      { id: generateId('Fiat', '500'), name: '500', year: 2024, specs: { hp: 118, torque: 220, acceleration: 9.0, topSpeed: 150, engineType: 'Electric' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 5, travel: 5, budgetFriendly: 7, power: 4 }, price: '€35,000' },
      { id: generateId('Fiat', '500 Abarth'), name: '500 Abarth', year: 2024, specs: { hp: 155, torque: 235, acceleration: 7.0, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 8, comfort: 6, speed: 7, sportiness: 8, travel: 4, budgetFriendly: 6, power: 6 }, price: '€45,000' },
      { id: generateId('Fiat', 'Panda'), name: 'Panda', year: 2024, specs: { hp: 70, torque: 147, acceleration: 13.0, topSpeed: 163, engineType: 'Hybrid' }, scores: { overall: 6, comfort: 6, speed: 4, sportiness: 3, travel: 6, budgetFriendly: 9, power: 3 }, price: '€18,000' },
      { id: generateId('Fiat', 'Tipo'), name: 'Tipo', year: 2024, specs: { hp: 130, torque: 270, acceleration: 9.8, topSpeed: 205, engineType: 'Diesel' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 4, travel: 8, budgetFriendly: 8, power: 5 }, price: '€25,000' },
      { id: generateId('Fiat', '600'), name: '600', year: 2024, specs: { hp: 156, torque: 260, acceleration: 9.0, topSpeed: 150, engineType: 'Electric' }, scores: { overall: 7, comfort: 7, speed: 6, sportiness: 5, travel: 7, budgetFriendly: 6, power: 5 }, price: '€38,000' },
    ]
  },
  {
    id: 'bentley',
    name: 'Bentley',
    country: 'İngiltere',
    countryCode: 'GB',
    category: 'Ultra Lüks',
    models: [
      { id: generateId('Bentley', 'Continental GT'), name: 'Continental GT', year: 2024, specs: { hp: 659, torque: 900, acceleration: 3.5, topSpeed: 335, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 10, speed: 10, sportiness: 8, travel: 7, budgetFriendly: 1, power: 10 }, price: '€250,000' },
      { id: generateId('Bentley', 'Flying Spur'), name: 'Flying Spur', year: 2024, specs: { hp: 659, torque: 900, acceleration: 3.7, topSpeed: 333, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 7, travel: 9, budgetFriendly: 1, power: 10 }, price: '€280,000' },
      { id: generateId('Bentley', 'Bentayga'), name: 'Bentayga', year: 2024, specs: { hp: 659, torque: 900, acceleration: 3.9, topSpeed: 306, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 6, travel: 10, budgetFriendly: 1, power: 10 }, price: '€230,000' },
      { id: generateId('Bentley', 'Mulliner Batur'), name: 'Mulliner Batur', year: 2024, specs: { hp: 740, torque: 1000, acceleration: 3.2, topSpeed: 340, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 9, travel: 5, budgetFriendly: 1, power: 10 }, price: '€2,000,000' },
    ]
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    country: 'İngiltere',
    countryCode: 'GB',
    category: 'Ultra Lüks',
    models: [
      { id: generateId('Rolls-Royce', 'Phantom'), name: 'Phantom', year: 2024, specs: { hp: 571, torque: 900, acceleration: 5.1, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 10, comfort: 10, speed: 8, sportiness: 4, travel: 10, budgetFriendly: 1, power: 9 }, price: '€550,000' },
      { id: generateId('Rolls-Royce', 'Ghost'), name: 'Ghost', year: 2024, specs: { hp: 571, torque: 850, acceleration: 4.8, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 10, comfort: 10, speed: 8, sportiness: 5, travel: 9, budgetFriendly: 1, power: 9 }, price: '€380,000' },
      { id: generateId('Rolls-Royce', 'Cullinan'), name: 'Cullinan', year: 2024, specs: { hp: 571, torque: 850, acceleration: 5.2, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 10, comfort: 10, speed: 8, sportiness: 5, travel: 10, budgetFriendly: 1, power: 9 }, price: '€450,000' },
      { id: generateId('Rolls-Royce', 'Spectre'), name: 'Spectre', year: 2024, specs: { hp: 585, torque: 900, acceleration: 4.5, topSpeed: 250, engineType: 'Electric' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 6, travel: 8, budgetFriendly: 1, power: 9 }, price: '€420,000' },
      { id: generateId('Rolls-Royce', 'Wraith'), name: 'Wraith', year: 2024, specs: { hp: 632, torque: 820, acceleration: 4.4, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 7, travel: 7, budgetFriendly: 1, power: 10 }, price: '€400,000' },
      { id: generateId('Rolls-Royce', 'Dawn'), name: 'Dawn', year: 2024, specs: { hp: 571, torque: 820, acceleration: 4.9, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 10, comfort: 10, speed: 8, sportiness: 6, travel: 6, budgetFriendly: 1, power: 9 }, price: '€420,000' },
    ]
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    country: 'İngiltere',
    countryCode: 'GB',
    category: 'Süper Spor',
    models: [
      { id: generateId('Aston Martin', 'Vantage'), name: 'Vantage', year: 2024, specs: { hp: 665, torque: 800, acceleration: 3.4, topSpeed: 325, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 4, budgetFriendly: 1, power: 10 }, price: '€200,000' },
      { id: generateId('Aston Martin', 'DB12'), name: 'DB12', year: 2024, specs: { hp: 680, torque: 800, acceleration: 3.5, topSpeed: 325, engineType: 'Petrol' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 9, travel: 6, budgetFriendly: 1, power: 10 }, price: '€245,000' },
      { id: generateId('Aston Martin', 'DBS'), name: 'DBS', year: 2024, specs: { hp: 759, torque: 900, acceleration: 3.2, topSpeed: 340, engineType: 'Petrol' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 10, travel: 5, budgetFriendly: 1, power: 10 }, price: '€340,000' },
      { id: generateId('Aston Martin', 'DBX707'), name: 'DBX707', year: 2024, specs: { hp: 707, torque: 900, acceleration: 3.3, topSpeed: 310, engineType: 'Petrol' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 8, travel: 8, budgetFriendly: 1, power: 10 }, price: '€280,000' },
      { id: generateId('Aston Martin', 'Valkyrie'), name: 'Valkyrie', year: 2024, specs: { hp: 1160, torque: 900, acceleration: 2.5, topSpeed: 402, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 4, speed: 10, sportiness: 10, travel: 1, budgetFriendly: 1, power: 10 }, price: '€3,200,000' },
    ]
  },
  {
    id: 'maserati',
    name: 'Maserati',
    country: 'İtalya',
    countryCode: 'IT',
    category: 'Lüks',
    models: [
      { id: generateId('Maserati', 'GranTurismo'), name: 'GranTurismo', year: 2024, specs: { hp: 550, torque: 650, acceleration: 3.5, topSpeed: 320, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 10, sportiness: 9, travel: 6, budgetFriendly: 1, power: 10 }, price: '€200,000' },
      { id: generateId('Maserati', 'GranCabrio'), name: 'GranCabrio', year: 2024, specs: { hp: 550, torque: 650, acceleration: 3.6, topSpeed: 316, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 10, sportiness: 9, travel: 5, budgetFriendly: 1, power: 10 }, price: '€220,000' },
      { id: generateId('Maserati', 'MC20'), name: 'MC20', year: 2024, specs: { hp: 630, torque: 730, acceleration: 2.9, topSpeed: 325, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€270,000' },
      { id: generateId('Maserati', 'Grecale'), name: 'Grecale', year: 2024, specs: { hp: 530, torque: 620, acceleration: 3.8, topSpeed: 285, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 9, sportiness: 8, travel: 8, budgetFriendly: 2, power: 9 }, price: '€120,000' },
      { id: generateId('Maserati', 'Levante'), name: 'Levante', year: 2024, specs: { hp: 580, torque: 750, acceleration: 3.9, topSpeed: 302, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 9, sportiness: 7, travel: 9, budgetFriendly: 1, power: 10 }, price: '€140,000' },
      { id: generateId('Maserati', 'Quattroporte'), name: 'Quattroporte', year: 2024, specs: { hp: 580, torque: 730, acceleration: 4.2, topSpeed: 310, engineType: 'Petrol' }, scores: { overall: 9, comfort: 10, speed: 9, sportiness: 7, travel: 8, budgetFriendly: 1, power: 9 }, price: '€150,000' },
    ]
  },
  {
    id: 'alfa-romeo',
    name: 'Alfa Romeo',
    country: 'İtalya',
    countryCode: 'IT',
    category: 'Lüks',
    models: [
      { id: generateId('Alfa Romeo', 'Giulia'), name: 'Giulia', year: 2024, specs: { hp: 280, torque: 400, acceleration: 5.2, topSpeed: 240, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 8, sportiness: 9, travel: 7, budgetFriendly: 4, power: 8 }, price: '€55,000' },
      { id: generateId('Alfa Romeo', 'Giulia Quadrifoglio'), name: 'Giulia Quadrifoglio', year: 2024, specs: { hp: 520, torque: 600, acceleration: 3.9, topSpeed: 307, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 5, budgetFriendly: 2, power: 10 }, price: '€95,000' },
      { id: generateId('Alfa Romeo', 'Stelvio'), name: 'Stelvio', year: 2024, specs: { hp: 280, torque: 400, acceleration: 5.7, topSpeed: 232, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 8, sportiness: 8, travel: 8, budgetFriendly: 4, power: 8 }, price: '€60,000' },
      { id: generateId('Alfa Romeo', 'Stelvio Quadrifoglio'), name: 'Stelvio Quadrifoglio', year: 2024, specs: { hp: 520, torque: 600, acceleration: 3.8, topSpeed: 283, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 7, budgetFriendly: 2, power: 10 }, price: '€105,000' },
      { id: generateId('Alfa Romeo', 'Tonale'), name: 'Tonale', year: 2024, specs: { hp: 275, torque: 400, acceleration: 6.2, topSpeed: 135, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 7, travel: 8, budgetFriendly: 5, power: 7 }, price: '€48,000' },
      { id: generateId('Alfa Romeo', '33 Stradale'), name: '33 Stradale', year: 2024, specs: { hp: 620, torque: 600, acceleration: 3.0, topSpeed: 333, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€2,000,000' },
    ]
  },
  {
    id: 'jaguar',
    name: 'Jaguar',
    country: 'İngiltere',
    countryCode: 'GB',
    category: 'Lüks',
    models: [
      { id: generateId('Jaguar', 'F-Type'), name: 'F-Type', year: 2024, specs: { hp: 575, torque: 700, acceleration: 3.5, topSpeed: 300, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 10, sportiness: 10, travel: 4, budgetFriendly: 2, power: 10 }, price: '€120,000' },
      { id: generateId('Jaguar', 'F-Pace'), name: 'F-Pace', year: 2024, specs: { hp: 550, torque: 700, acceleration: 4.0, topSpeed: 286, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 9, sportiness: 8, travel: 9, budgetFriendly: 2, power: 9 }, price: '€110,000' },
      { id: generateId('Jaguar', 'E-Pace'), name: 'E-Pace', year: 2024, specs: { hp: 300, torque: 400, acceleration: 6.6, topSpeed: 243, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 7, travel: 8, budgetFriendly: 4, power: 7 }, price: '€55,000' },
      { id: generateId('Jaguar', 'I-Pace'), name: 'I-Pace', year: 2024, specs: { hp: 400, torque: 696, acceleration: 4.5, topSpeed: 200, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 7, budgetFriendly: 3, power: 8 }, price: '€85,000' },
      { id: generateId('Jaguar', 'XF'), name: 'XF', year: 2024, specs: { hp: 300, torque: 400, acceleration: 5.9, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 4, power: 7 }, price: '€60,000' },
    ]
  },
  // Group 4: Bugatti, Mitsubishi, Suzuki, Dacia, Skoda, Seat, Cupra, Citroën, Cadillac, Dodge
  {
    id: 'bugatti',
    name: 'Bugatti',
    country: 'Fransa',
    countryCode: 'FR',
    category: 'Hiper Spor',
    models: [
      { id: generateId('Bugatti', 'Chiron'), name: 'Chiron', year: 2024, specs: { hp: 1500, torque: 1600, acceleration: 2.4, topSpeed: 420, engineType: 'Petrol' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€3,500,000' },
      { id: generateId('Bugatti', 'Chiron Super Sport'), name: 'Chiron Super Sport', year: 2024, specs: { hp: 1600, torque: 1600, acceleration: 2.3, topSpeed: 440, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€4,200,000' },
      { id: generateId('Bugatti', 'Mistral'), name: 'Mistral', year: 2024, specs: { hp: 1600, torque: 1600, acceleration: 2.4, topSpeed: 420, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€5,500,000' },
      { id: generateId('Bugatti', 'Tourbillon'), name: 'Tourbillon', year: 2025, specs: { hp: 1800, torque: 1800, acceleration: 2.0, topSpeed: 445, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€4,000,000' },
      { id: generateId('Bugatti', 'Bolide'), name: 'Bolide', year: 2024, specs: { hp: 1850, torque: 1850, acceleration: 2.2, topSpeed: 500, engineType: 'Petrol' }, scores: { overall: 10, comfort: 4, speed: 10, sportiness: 10, travel: 1, budgetFriendly: 1, power: 10 }, price: '€4,800,000' },
    ]
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Genel',
    models: [
      { id: generateId('Mitsubishi', 'Outlander'), name: 'Outlander', year: 2024, specs: { hp: 248, torque: 332, acceleration: 7.5, topSpeed: 195, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 6, power: 7 }, price: '€45,000' },
      { id: generateId('Mitsubishi', 'Eclipse Cross'), name: 'Eclipse Cross', year: 2024, specs: { hp: 188, torque: 300, acceleration: 8.5, topSpeed: 180, engineType: 'Plug-in Hybrid' }, scores: { overall: 7, comfort: 7, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 6, power: 6 }, price: '€38,000' },
      { id: generateId('Mitsubishi', 'ASX'), name: 'ASX', year: 2024, specs: { hp: 145, torque: 255, acceleration: 9.5, topSpeed: 190, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 4, travel: 8, budgetFriendly: 7, power: 5 }, price: '€28,000' },
      { id: generateId('Mitsubishi', 'Colt'), name: 'Colt', year: 2024, specs: { hp: 91, torque: 160, acceleration: 11.0, topSpeed: 180, engineType: 'Hybrid' }, scores: { overall: 6, comfort: 6, speed: 5, sportiness: 4, travel: 6, budgetFriendly: 8, power: 4 }, price: '€18,000' },
      { id: generateId('Mitsubishi', 'Pajero'), name: 'Pajero', year: 2024, specs: { hp: 190, torque: 441, acceleration: 10.0, topSpeed: 180, engineType: 'Diesel' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 5, travel: 10, budgetFriendly: 5, power: 6 }, price: '€55,000' },
    ]
  },
  {
    id: 'suzuki',
    name: 'Suzuki',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Genel',
    models: [
      { id: generateId('Suzuki', 'Swift'), name: 'Swift', year: 2024, specs: { hp: 112, torque: 170, acceleration: 10.5, topSpeed: 185, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 6, travel: 6, budgetFriendly: 9, power: 4 }, price: '€18,000' },
      { id: generateId('Suzuki', 'Swift Sport'), name: 'Swift Sport', year: 2024, specs: { hp: 140, torque: 230, acceleration: 8.1, topSpeed: 210, engineType: 'Petrol' }, scores: { overall: 8, comfort: 6, speed: 7, sportiness: 8, travel: 5, budgetFriendly: 7, power: 5 }, price: '€25,000' },
      { id: generateId('Suzuki', 'Vitara'), name: 'Vitara', year: 2024, specs: { hp: 129, torque: 235, acceleration: 10.5, topSpeed: 185, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 5, travel: 8, budgetFriendly: 7, power: 5 }, price: '€28,000' },
      { id: generateId('Suzuki', 'S-Cross'), name: 'S-Cross', year: 2024, specs: { hp: 129, torque: 235, acceleration: 10.5, topSpeed: 185, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 5, travel: 8, budgetFriendly: 7, power: 5 }, price: '€30,000' },
      { id: generateId('Suzuki', 'Jimny'), name: 'Jimny', year: 2024, specs: { hp: 102, torque: 130, acceleration: 12.0, topSpeed: 145, engineType: 'Petrol' }, scores: { overall: 7, comfort: 5, speed: 4, sportiness: 6, travel: 9, budgetFriendly: 6, power: 4 }, price: '€32,000' },
    ]
  },
  {
    id: 'dacia',
    name: 'Dacia',
    country: 'Romanya',
    countryCode: 'RO',
    category: 'Bütçe',
    models: [
      { id: generateId('Dacia', 'Sandero'), name: 'Sandero', year: 2024, specs: { hp: 110, torque: 200, acceleration: 10.5, topSpeed: 180, engineType: 'Petrol' }, scores: { overall: 7, comfort: 6, speed: 5, sportiness: 4, travel: 7, budgetFriendly: 10, power: 4 }, price: '€12,000' },
      { id: generateId('Dacia', 'Duster'), name: 'Duster', year: 2024, specs: { hp: 130, torque: 205, acceleration: 11.0, topSpeed: 180, engineType: 'Petrol' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 5, travel: 9, budgetFriendly: 9, power: 5 }, price: '€20,000' },
      { id: generateId('Dacia', 'Jogger'), name: 'Jogger', year: 2024, specs: { hp: 140, torque: 205, acceleration: 10.5, topSpeed: 175, engineType: 'Hybrid' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 4, travel: 9, budgetFriendly: 9, power: 5 }, price: '€22,000' },
      { id: generateId('Dacia', 'Spring'), name: 'Spring', year: 2024, specs: { hp: 65, torque: 125, acceleration: 13.7, topSpeed: 125, engineType: 'Electric' }, scores: { overall: 6, comfort: 5, speed: 4, sportiness: 3, travel: 5, budgetFriendly: 10, power: 3 }, price: '€22,000' },
    ]
  },
  {
    id: 'skoda',
    name: 'Škoda',
    country: 'Çekya',
    countryCode: 'CZ',
    category: 'Genel',
    models: [
      { id: generateId('Skoda', 'Octavia'), name: 'Octavia', year: 2024, specs: { hp: 150, torque: 250, acceleration: 8.4, topSpeed: 224, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 7, power: 6 }, price: '€30,000' },
      { id: generateId('Skoda', 'Octavia RS'), name: 'Octavia RS', year: 2024, specs: { hp: 245, torque: 370, acceleration: 6.4, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 8, sportiness: 8, travel: 8, budgetFriendly: 5, power: 7 }, price: '€42,000' },
      { id: generateId('Skoda', 'Superb'), name: 'Superb', year: 2024, specs: { hp: 204, torque: 320, acceleration: 7.0, topSpeed: 246, engineType: 'Petrol' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€42,000' },
      { id: generateId('Skoda', 'Kodiaq'), name: 'Kodiaq', year: 2024, specs: { hp: 204, torque: 320, acceleration: 7.6, topSpeed: 220, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€45,000' },
      { id: generateId('Skoda', 'Enyaq iV'), name: 'Enyaq iV', year: 2024, specs: { hp: 286, torque: 545, acceleration: 6.7, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 8, budgetFriendly: 5, power: 7 }, price: '€52,000' },
      { id: generateId('Skoda', 'Karoq'), name: 'Karoq', year: 2024, specs: { hp: 150, torque: 250, acceleration: 9.0, topSpeed: 204, engineType: 'Petrol' }, scores: { overall: 7, comfort: 8, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 7, power: 5 }, price: '€32,000' },
    ]
  },
  {
    id: 'seat',
    name: 'SEAT',
    country: 'İspanya',
    countryCode: 'ES',
    category: 'Genel',
    models: [
      { id: generateId('Seat', 'Ibiza'), name: 'Ibiza', year: 2024, specs: { hp: 115, torque: 200, acceleration: 9.8, topSpeed: 195, engineType: 'Petrol' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 5, travel: 7, budgetFriendly: 8, power: 4 }, price: '€22,000' },
      { id: generateId('Seat', 'Leon'), name: 'León', year: 2024, specs: { hp: 150, torque: 250, acceleration: 8.4, topSpeed: 224, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 7, power: 6 }, price: '€28,000' },
      { id: generateId('Seat', 'Ateca'), name: 'Ateca', year: 2024, specs: { hp: 150, torque: 250, acceleration: 8.8, topSpeed: 202, engineType: 'Petrol' }, scores: { overall: 7, comfort: 8, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 7, power: 5 }, price: '€32,000' },
      { id: generateId('Seat', 'Tarraco'), name: 'Tarraco', year: 2024, specs: { hp: 190, torque: 320, acceleration: 8.0, topSpeed: 211, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 9, budgetFriendly: 6, power: 6 }, price: '€42,000' },
      { id: generateId('Seat', 'Arona'), name: 'Arona', year: 2024, specs: { hp: 115, torque: 200, acceleration: 10.0, topSpeed: 188, engineType: 'Petrol' }, scores: { overall: 7, comfort: 7, speed: 5, sportiness: 5, travel: 7, budgetFriendly: 8, power: 4 }, price: '€25,000' },
    ]
  },
  {
    id: 'cupra',
    name: 'Cupra',
    country: 'İspanya',
    countryCode: 'ES',
    category: 'Spor',
    models: [
      { id: generateId('Cupra', 'Formentor'), name: 'Formentor', year: 2024, specs: { hp: 310, torque: 400, acceleration: 4.9, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 9, sportiness: 9, travel: 7, budgetFriendly: 5, power: 8 }, price: '€48,000' },
      { id: generateId('Cupra', 'Leon'), name: 'León', year: 2024, specs: { hp: 300, torque: 400, acceleration: 5.2, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 9, sportiness: 9, travel: 7, budgetFriendly: 5, power: 8 }, price: '€45,000' },
      { id: generateId('Cupra', 'Born'), name: 'Born', year: 2024, specs: { hp: 231, torque: 310, acceleration: 6.6, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 7, travel: 7, budgetFriendly: 5, power: 7 }, price: '€42,000' },
      { id: generateId('Cupra', 'Tavascan'), name: 'Tavascan', year: 2024, specs: { hp: 340, torque: 679, acceleration: 5.6, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 4, power: 8 }, price: '€55,000' },
      { id: generateId('Cupra', 'Terramar'), name: 'Terramar', year: 2024, specs: { hp: 265, torque: 400, acceleration: 6.0, topSpeed: 220, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 7, travel: 8, budgetFriendly: 5, power: 7 }, price: '€50,000' },
    ]
  },
  {
    id: 'citroen',
    name: 'Citroën',
    country: 'Fransa',
    countryCode: 'FR',
    category: 'Genel',
    models: [
      { id: generateId('Citroen', 'C3'), name: 'C3', year: 2024, specs: { hp: 113, torque: 205, acceleration: 9.0, topSpeed: 188, engineType: 'Petrol' }, scores: { overall: 7, comfort: 8, speed: 5, sportiness: 4, travel: 7, budgetFriendly: 8, power: 4 }, price: '€18,000' },
      { id: generateId('Citroen', 'C4'), name: 'C4', year: 2024, specs: { hp: 156, torque: 260, acceleration: 8.9, topSpeed: 150, engineType: 'Electric' }, scores: { overall: 7, comfort: 8, speed: 6, sportiness: 5, travel: 7, budgetFriendly: 6, power: 5 }, price: '€38,000' },
      { id: generateId('Citroen', 'C5 X'), name: 'C5 X', year: 2024, specs: { hp: 225, torque: 360, acceleration: 7.9, topSpeed: 233, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 7 }, price: '€50,000' },
      { id: generateId('Citroen', 'C5 Aircross'), name: 'C5 Aircross', year: 2024, specs: { hp: 225, torque: 360, acceleration: 8.5, topSpeed: 225, engineType: 'Plug-in Hybrid' }, scores: { overall: 7, comfort: 9, speed: 6, sportiness: 4, travel: 8, budgetFriendly: 5, power: 6 }, price: '€45,000' },
      { id: generateId('Citroen', 'Ami'), name: 'Ami', year: 2024, specs: { hp: 8, torque: 50, acceleration: 45.0, topSpeed: 45, engineType: 'Electric' }, scores: { overall: 5, comfort: 4, speed: 1, sportiness: 2, travel: 3, budgetFriendly: 10, power: 1 }, price: '€8,000' },
    ]
  },
  {
    id: 'cadillac',
    name: 'Cadillac',
    country: 'ABD',
    countryCode: 'US',
    category: 'Lüks',
    models: [
      { id: generateId('Cadillac', 'CT5'), name: 'CT5', year: 2024, specs: { hp: 335, torque: 405, acceleration: 5.3, topSpeed: 240, engineType: 'Petrol' }, scores: { overall: 8, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 4, power: 8 }, price: '€52,000' },
      { id: generateId('Cadillac', 'CT5-V Blackwing'), name: 'CT5-V Blackwing', year: 2024, specs: { hp: 668, torque: 893, acceleration: 3.4, topSpeed: 322, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 6, budgetFriendly: 2, power: 10 }, price: '€100,000' },
      { id: generateId('Cadillac', 'Escalade'), name: 'Escalade', year: 2024, specs: { hp: 420, torque: 623, acceleration: 6.2, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 9, comfort: 10, speed: 7, sportiness: 4, travel: 10, budgetFriendly: 2, power: 8 }, price: '€110,000' },
      { id: generateId('Cadillac', 'Escalade IQ'), name: 'Escalade IQ', year: 2024, specs: { hp: 750, torque: 950, acceleration: 4.9, topSpeed: 175, engineType: 'Electric' }, scores: { overall: 9, comfort: 10, speed: 8, sportiness: 5, travel: 9, budgetFriendly: 1, power: 9 }, price: '€140,000' },
      { id: generateId('Cadillac', 'Lyriq'), name: 'Lyriq', year: 2024, specs: { hp: 500, torque: 610, acceleration: 5.3, topSpeed: 200, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 8, budgetFriendly: 3, power: 9 }, price: '€70,000' },
      { id: generateId('Cadillac', 'Celestiq'), name: 'Celestiq', year: 2024, specs: { hp: 600, torque: 880, acceleration: 3.8, topSpeed: 200, engineType: 'Electric' }, scores: { overall: 10, comfort: 10, speed: 9, sportiness: 5, travel: 8, budgetFriendly: 1, power: 9 }, price: '€350,000' },
    ]
  },
  {
    id: 'dodge',
    name: 'Dodge',
    country: 'ABD',
    countryCode: 'US',
    category: 'Muscle',
    models: [
      { id: generateId('Dodge', 'Challenger'), name: 'Challenger', year: 2024, specs: { hp: 485, torque: 650, acceleration: 4.5, topSpeed: 280, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 9, sportiness: 10, travel: 5, budgetFriendly: 4, power: 9 }, price: '€55,000' },
      { id: generateId('Dodge', 'Challenger Hellcat'), name: 'Challenger Hellcat', year: 2024, specs: { hp: 717, torque: 881, acceleration: 3.5, topSpeed: 328, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 4, budgetFriendly: 2, power: 10 }, price: '€85,000' },
      { id: generateId('Dodge', 'Charger'), name: 'Charger', year: 2024, specs: { hp: 670, torque: 800, acceleration: 3.3, topSpeed: 260, engineType: 'Electric' }, scores: { overall: 9, comfort: 8, speed: 10, sportiness: 9, travel: 6, budgetFriendly: 3, power: 10 }, price: '€75,000' },
      { id: generateId('Dodge', 'Durango'), name: 'Durango', year: 2024, specs: { hp: 475, torque: 637, acceleration: 4.4, topSpeed: 240, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 8, sportiness: 7, travel: 9, budgetFriendly: 4, power: 9 }, price: '€65,000' },
      { id: generateId('Dodge', 'Durango SRT Hellcat'), name: 'Durango SRT Hellcat', year: 2024, specs: { hp: 710, torque: 875, acceleration: 3.5, topSpeed: 290, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 9, travel: 8, budgetFriendly: 2, power: 10 }, price: '€95,000' },
      { id: generateId('Dodge', 'Hornet'), name: 'Hornet', year: 2024, specs: { hp: 288, torque: 519, acceleration: 6.1, topSpeed: 225, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 7, speed: 7, sportiness: 7, travel: 7, budgetFriendly: 5, power: 7 }, price: '€45,000' },
    ]
  },
  // Group 5: Ram, GMC, BYD, Genesis, Infiniti, Acura, McLaren, Lotus, Mini, Pagani
  {
    id: 'ram',
    name: 'Ram',
    country: 'ABD',
    countryCode: 'US',
    category: 'Pickup',
    models: [
      { id: generateId('Ram', '1500'), name: '1500', year: 2024, specs: { hp: 395, torque: 556, acceleration: 6.0, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 10, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Ram', '1500 TRX'), name: '1500 TRX', year: 2024, specs: { hp: 702, torque: 881, acceleration: 4.5, topSpeed: 190, engineType: 'Petrol' }, scores: { overall: 9, comfort: 7, speed: 9, sportiness: 8, travel: 9, budgetFriendly: 2, power: 10 }, price: '€95,000' },
      { id: generateId('Ram', '1500 REV'), name: '1500 REV', year: 2024, specs: { hp: 654, torque: 840, acceleration: 4.4, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 9, comfort: 8, speed: 8, sportiness: 6, travel: 9, budgetFriendly: 3, power: 9 }, price: '€80,000' },
      { id: generateId('Ram', '2500'), name: '2500', year: 2024, specs: { hp: 410, torque: 1084, acceleration: 7.5, topSpeed: 165, engineType: 'Diesel' }, scores: { overall: 8, comfort: 7, speed: 6, sportiness: 4, travel: 10, budgetFriendly: 4, power: 9 }, price: '€65,000' },
      { id: generateId('Ram', '3500'), name: '3500', year: 2024, specs: { hp: 420, torque: 1356, acceleration: 8.0, topSpeed: 155, engineType: 'Diesel' }, scores: { overall: 8, comfort: 7, speed: 5, sportiness: 3, travel: 10, budgetFriendly: 4, power: 9 }, price: '€75,000' },
    ]
  },
  {
    id: 'gmc',
    name: 'GMC',
    country: 'ABD',
    countryCode: 'US',
    category: 'Pickup/SUV',
    models: [
      { id: generateId('GMC', 'Sierra'), name: 'Sierra', year: 2024, specs: { hp: 420, torque: 623, acceleration: 6.0, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 5, travel: 10, budgetFriendly: 4, power: 8 }, price: '€60,000' },
      { id: generateId('GMC', 'Sierra Denali'), name: 'Sierra Denali', year: 2024, specs: { hp: 420, torque: 624, acceleration: 6.0, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 7, sportiness: 5, travel: 10, budgetFriendly: 3, power: 8 }, price: '€85,000' },
      { id: generateId('GMC', 'Yukon'), name: 'Yukon', year: 2024, specs: { hp: 420, torque: 623, acceleration: 6.5, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 7, sportiness: 4, travel: 10, budgetFriendly: 3, power: 8 }, price: '€80,000' },
      { id: generateId('GMC', 'Hummer EV'), name: 'Hummer EV', year: 2024, specs: { hp: 1000, torque: 1623, acceleration: 3.0, topSpeed: 170, engineType: 'Electric' }, scores: { overall: 9, comfort: 8, speed: 9, sportiness: 7, travel: 8, budgetFriendly: 1, power: 10 }, price: '€130,000' },
      { id: generateId('GMC', 'Canyon'), name: 'Canyon', year: 2024, specs: { hp: 310, torque: 430, acceleration: 7.0, topSpeed: 175, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 5, power: 7 }, price: '€45,000' },
    ]
  },
  {
    id: 'byd',
    name: 'BYD',
    country: 'Çin',
    countryCode: 'CN',
    category: 'Elektrikli',
    models: [
      { id: generateId('BYD', 'Atto 3'), name: 'Atto 3', year: 2024, specs: { hp: 204, torque: 310, acceleration: 7.3, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 6, sportiness: 5, travel: 8, budgetFriendly: 7, power: 6 }, price: '€38,000' },
      { id: generateId('BYD', 'Seal'), name: 'Seal', year: 2024, specs: { hp: 530, torque: 670, acceleration: 3.8, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 9, sportiness: 8, travel: 7, budgetFriendly: 5, power: 9 }, price: '€55,000' },
      { id: generateId('BYD', 'Han'), name: 'Han', year: 2024, specs: { hp: 517, torque: 700, acceleration: 3.9, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 5, power: 9 }, price: '€58,000' },
      { id: generateId('BYD', 'Tang'), name: 'Tang', year: 2024, specs: { hp: 517, torque: 700, acceleration: 4.6, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 9, budgetFriendly: 4, power: 9 }, price: '€72,000' },
      { id: generateId('BYD', 'Dolphin'), name: 'Dolphin', year: 2024, specs: { hp: 204, torque: 310, acceleration: 7.0, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 8, comfort: 7, speed: 6, sportiness: 5, travel: 7, budgetFriendly: 8, power: 6 }, price: '€32,000' },
      { id: generateId('BYD', 'Seal U'), name: 'Seal U', year: 2024, specs: { hp: 313, torque: 480, acceleration: 5.9, topSpeed: 180, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 6, power: 7 }, price: '€48,000' },
    ]
  },
  {
    id: 'genesis',
    name: 'Genesis',
    country: 'Güney Kore',
    countryCode: 'KR',
    category: 'Lüks',
    models: [
      { id: generateId('Genesis', 'G70'), name: 'G70', year: 2024, specs: { hp: 365, torque: 510, acceleration: 4.5, topSpeed: 270, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 9, sportiness: 9, travel: 7, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Genesis', 'G80'), name: 'G80', year: 2024, specs: { hp: 375, torque: 530, acceleration: 5.0, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 9, budgetFriendly: 4, power: 8 }, price: '€72,000' },
      { id: generateId('Genesis', 'G90'), name: 'G90', year: 2024, specs: { hp: 409, torque: 405, acceleration: 5.3, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 10, speed: 8, sportiness: 5, travel: 10, budgetFriendly: 2, power: 8 }, price: '€110,000' },
      { id: generateId('Genesis', 'GV60'), name: 'GV60', year: 2024, specs: { hp: 429, torque: 700, acceleration: 4.0, topSpeed: 235, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 9, sportiness: 8, travel: 7, budgetFriendly: 4, power: 9 }, price: '€65,000' },
      { id: generateId('Genesis', 'GV70'), name: 'GV70', year: 2024, specs: { hp: 375, torque: 530, acceleration: 5.1, topSpeed: 240, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 4, power: 8 }, price: '€68,000' },
      { id: generateId('Genesis', 'GV80'), name: 'GV80', year: 2024, specs: { hp: 375, torque: 530, acceleration: 5.5, topSpeed: 240, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 9, budgetFriendly: 3, power: 8 }, price: '€85,000' },
    ]
  },
  {
    id: 'infiniti',
    name: 'Infiniti',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Lüks',
    models: [
      { id: generateId('Infiniti', 'Q50'), name: 'Q50', year: 2024, specs: { hp: 400, torque: 475, acceleration: 4.7, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 9, sportiness: 8, travel: 7, budgetFriendly: 5, power: 8 }, price: '€55,000' },
      { id: generateId('Infiniti', 'Q60'), name: 'Q60', year: 2024, specs: { hp: 400, torque: 475, acceleration: 4.5, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 9, sportiness: 9, travel: 5, budgetFriendly: 4, power: 8 }, price: '€58,000' },
      { id: generateId('Infiniti', 'QX50'), name: 'QX50', year: 2024, specs: { hp: 268, torque: 380, acceleration: 6.7, topSpeed: 230, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 5, power: 7 }, price: '€48,000' },
      { id: generateId('Infiniti', 'QX60'), name: 'QX60', year: 2024, specs: { hp: 295, torque: 370, acceleration: 6.8, topSpeed: 230, engineType: 'Petrol' }, scores: { overall: 8, comfort: 9, speed: 7, sportiness: 5, travel: 9, budgetFriendly: 4, power: 7 }, price: '€58,000' },
      { id: generateId('Infiniti', 'QX80'), name: 'QX80', year: 2024, specs: { hp: 450, torque: 700, acceleration: 5.6, topSpeed: 210, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 5, travel: 10, budgetFriendly: 2, power: 9 }, price: '€95,000' },
    ]
  },
  {
    id: 'acura',
    name: 'Acura',
    country: 'Japonya',
    countryCode: 'JP',
    category: 'Lüks',
    models: [
      { id: generateId('Acura', 'Integra'), name: 'Integra', year: 2024, specs: { hp: 320, torque: 420, acceleration: 5.0, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 8, sportiness: 9, travel: 6, budgetFriendly: 5, power: 8 }, price: '€42,000' },
      { id: generateId('Acura', 'TLX'), name: 'TLX', year: 2024, specs: { hp: 355, torque: 354, acceleration: 5.1, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 8, comfort: 9, speed: 8, sportiness: 7, travel: 8, budgetFriendly: 4, power: 8 }, price: '€55,000' },
      { id: generateId('Acura', 'TLX Type S'), name: 'TLX Type S', year: 2024, specs: { hp: 355, torque: 475, acceleration: 4.9, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 8, speed: 9, sportiness: 9, travel: 7, budgetFriendly: 4, power: 9 }, price: '€62,000' },
      { id: generateId('Acura', 'MDX'), name: 'MDX', year: 2024, specs: { hp: 355, torque: 354, acceleration: 5.8, topSpeed: 230, engineType: 'Petrol' }, scores: { overall: 9, comfort: 9, speed: 8, sportiness: 6, travel: 9, budgetFriendly: 4, power: 8 }, price: '€65,000' },
      { id: generateId('Acura', 'RDX'), name: 'RDX', year: 2024, specs: { hp: 272, torque: 380, acceleration: 6.2, topSpeed: 225, engineType: 'Petrol' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 5, power: 7 }, price: '€48,000' },
      { id: generateId('Acura', 'ZDX'), name: 'ZDX', year: 2024, specs: { hp: 500, torque: 700, acceleration: 4.3, topSpeed: 200, engineType: 'Electric' }, scores: { overall: 9, comfort: 9, speed: 9, sportiness: 7, travel: 8, budgetFriendly: 3, power: 9 }, price: '€75,000' },
    ]
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    country: 'İngiltere',
    countryCode: 'GB',
    category: 'Hiper Spor',
    models: [
      { id: generateId('McLaren', 'Artura'), name: 'Artura', year: 2024, specs: { hp: 680, torque: 720, acceleration: 3.0, topSpeed: 330, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€240,000' },
      { id: generateId('McLaren', '750S'), name: '750S', year: 2024, specs: { hp: 750, torque: 800, acceleration: 2.8, topSpeed: 332, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€295,000' },
      { id: generateId('McLaren', '765LT'), name: '765LT', year: 2024, specs: { hp: 765, torque: 800, acceleration: 2.7, topSpeed: 330, engineType: 'Petrol' }, scores: { overall: 10, comfort: 5, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€380,000' },
      { id: generateId('McLaren', 'Speedtail'), name: 'Speedtail', year: 2024, specs: { hp: 1050, torque: 1150, acceleration: 2.5, topSpeed: 403, engineType: 'Hybrid' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€2,500,000' },
      { id: generateId('McLaren', 'GT'), name: 'GT', year: 2024, specs: { hp: 620, torque: 630, acceleration: 3.2, topSpeed: 326, engineType: 'Petrol' }, scores: { overall: 10, comfort: 8, speed: 10, sportiness: 9, travel: 6, budgetFriendly: 1, power: 10 }, price: '€220,000' },
      { id: generateId('McLaren', 'Solus GT'), name: 'Solus GT', year: 2024, specs: { hp: 840, torque: 600, acceleration: 2.4, topSpeed: 320, engineType: 'Petrol' }, scores: { overall: 10, comfort: 3, speed: 10, sportiness: 10, travel: 1, budgetFriendly: 1, power: 10 }, price: '€3,500,000' },
    ]
  },
  {
    id: 'lotus',
    name: 'Lotus',
    country: 'İngiltere',
    countryCode: 'GB',
    category: 'Spor',
    models: [
      { id: generateId('Lotus', 'Emira'), name: 'Emira', year: 2024, specs: { hp: 400, torque: 430, acceleration: 4.2, topSpeed: 290, engineType: 'Petrol' }, scores: { overall: 9, comfort: 6, speed: 9, sportiness: 10, travel: 3, budgetFriendly: 3, power: 9 }, price: '€95,000' },
      { id: generateId('Lotus', 'Eletre'), name: 'Eletre', year: 2024, specs: { hp: 905, torque: 985, acceleration: 2.9, topSpeed: 265, engineType: 'Electric' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 8, travel: 8, budgetFriendly: 1, power: 10 }, price: '€150,000' },
      { id: generateId('Lotus', 'Emeya'), name: 'Emeya', year: 2024, specs: { hp: 905, torque: 985, acceleration: 2.8, topSpeed: 256, engineType: 'Electric' }, scores: { overall: 10, comfort: 9, speed: 10, sportiness: 9, travel: 7, budgetFriendly: 1, power: 10 }, price: '€130,000' },
      { id: generateId('Lotus', 'Evija'), name: 'Evija', year: 2024, specs: { hp: 2000, torque: 1700, acceleration: 2.0, topSpeed: 340, engineType: 'Electric' }, scores: { overall: 10, comfort: 5, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€2,400,000' },
    ]
  },
  {
    id: 'mini',
    name: 'Mini',
    country: 'İngiltere',
    countryCode: 'GB',
    category: 'Kompakt',
    models: [
      { id: generateId('Mini', 'Cooper'), name: 'Cooper', year: 2024, specs: { hp: 163, torque: 250, acceleration: 7.4, topSpeed: 220, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 7, sportiness: 7, travel: 5, budgetFriendly: 6, power: 6 }, price: '€32,000' },
      { id: generateId('Mini', 'Cooper S'), name: 'Cooper S', year: 2024, specs: { hp: 204, torque: 300, acceleration: 6.6, topSpeed: 242, engineType: 'Petrol' }, scores: { overall: 8, comfort: 7, speed: 8, sportiness: 8, travel: 5, budgetFriendly: 5, power: 7 }, price: '€38,000' },
      { id: generateId('Mini', 'John Cooper Works'), name: 'John Cooper Works', year: 2024, specs: { hp: 231, torque: 350, acceleration: 6.1, topSpeed: 250, engineType: 'Petrol' }, scores: { overall: 9, comfort: 6, speed: 8, sportiness: 9, travel: 4, budgetFriendly: 4, power: 7 }, price: '€45,000' },
      { id: generateId('Mini', 'Countryman'), name: 'Countryman', year: 2024, specs: { hp: 218, torque: 390, acceleration: 6.8, topSpeed: 225, engineType: 'Plug-in Hybrid' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 8, budgetFriendly: 5, power: 7 }, price: '€48,000' },
      { id: generateId('Mini', 'Electric'), name: 'Electric', year: 2024, specs: { hp: 218, torque: 330, acceleration: 6.7, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 8, comfort: 7, speed: 7, sportiness: 7, travel: 5, budgetFriendly: 5, power: 7 }, price: '€38,000' },
      { id: generateId('Mini', 'Aceman'), name: 'Aceman', year: 2024, specs: { hp: 218, torque: 330, acceleration: 7.1, topSpeed: 160, engineType: 'Electric' }, scores: { overall: 8, comfort: 8, speed: 7, sportiness: 6, travel: 7, budgetFriendly: 5, power: 7 }, price: '€42,000' },
    ]
  },
  {
    id: 'pagani',
    name: 'Pagani',
    country: 'İtalya',
    countryCode: 'IT',
    category: 'Hiper Spor',
    models: [
      { id: generateId('Pagani', 'Huayra'), name: 'Huayra', year: 2024, specs: { hp: 764, torque: 1000, acceleration: 2.8, topSpeed: 383, engineType: 'Petrol' }, scores: { overall: 10, comfort: 6, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€2,800,000' },
      { id: generateId('Pagani', 'Huayra R'), name: 'Huayra R', year: 2024, specs: { hp: 850, torque: 750, acceleration: 2.4, topSpeed: 350, engineType: 'Petrol' }, scores: { overall: 10, comfort: 4, speed: 10, sportiness: 10, travel: 1, budgetFriendly: 1, power: 10 }, price: '€3,100,000' },
      { id: generateId('Pagani', 'Utopia'), name: 'Utopia', year: 2024, specs: { hp: 864, torque: 1100, acceleration: 2.6, topSpeed: 350, engineType: 'Petrol' }, scores: { overall: 10, comfort: 7, speed: 10, sportiness: 10, travel: 3, budgetFriendly: 1, power: 10 }, price: '€2,200,000' },
      { id: generateId('Pagani', 'Zonda'), name: 'Zonda', year: 2024, specs: { hp: 760, torque: 780, acceleration: 3.0, topSpeed: 350, engineType: 'Petrol' }, scores: { overall: 10, comfort: 5, speed: 10, sportiness: 10, travel: 2, budgetFriendly: 1, power: 10 }, price: '€3,500,000' },
    ]
  },
];

// Helper functions
export const getAllModels = (): (CarModel & { brand: string; brandId: string })[] => {
  return brands.flatMap(brand => 
    brand.models.map(model => ({
      ...model,
      brand: brand.name,
      brandId: brand.id,
    }))
  );
};

export const getBrandById = (id: string): Brand | undefined => {
  return brands.find(brand => brand.id === id);
};

export const getModelById = (brandId: string, modelId: string): CarModel | undefined => {
  const brand = getBrandById(brandId);
  return brand?.models.find(model => model.id === modelId);
};

export const getCountries = (): string[] => {
  return [...new Set(brands.map(brand => brand.country))];
};

export const getBrandsByCountry = (country: string): Brand[] => {
  return brands.filter(brand => brand.country === country);
};

export const getCategories = (): string[] => {
  return [...new Set(brands.map(brand => brand.category))];
};

export const getBrandsByCategory = (category: string): Brand[] => {
  return brands.filter(brand => brand.category === category);
};

export const searchCars = (query: string): (CarModel & { brand: string; brandId: string })[] => {
  const lowerQuery = query.toLowerCase();
  return getAllModels().filter(
    model =>
      model.name.toLowerCase().includes(lowerQuery) ||
      model.brand.toLowerCase().includes(lowerQuery)
  );
};

export const getYears = (): number[] => {
  return [2020, 2021, 2022, 2023, 2024, 2025, 2026];
};

export const getTotalBrands = (): number => brands.length;
export const getTotalModels = (): number => getAllModels().length;
