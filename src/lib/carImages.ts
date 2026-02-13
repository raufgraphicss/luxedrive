// Car image mapping using Unsplash for high-quality automotive images
// Images are curated based on brand and model characteristics

const carImageMap: Record<string, string> = {
  // Toyota
  'toyota-corolla': 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=1200&auto=format&fit=crop&q=80',
  'toyota-camry': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&auto=format&fit=crop&q=80',
  'toyota-gr-supra': 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=1200&auto=format&fit=crop&q=80',
  'toyota-rav4': 'https://images.unsplash.com/photo-1594611396960-3e7c3f09ebe9?w=1200&auto=format&fit=crop&q=80',
  'toyota-land-cruiser': 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&auto=format&fit=crop&q=80',
  'toyota-gr86': 'https://images.unsplash.com/photo-1632441545366-65a03b789834?w=1200&auto=format&fit=crop&q=80',
  'toyota-crown': 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&auto=format&fit=crop&q=80',
  'toyota-bz4x': 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&auto=format&fit=crop&q=80',

  // Volkswagen
  'volkswagen-golf': 'https://images.unsplash.com/photo-1612825173281-9a193378d98a?w=1200&auto=format&fit=crop&q=80',
  'volkswagen-golf-r': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'volkswagen-passat': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&auto=format&fit=crop&q=80',
  'volkswagen-tiguan': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'volkswagen-touareg': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'volkswagen-id4': 'https://images.unsplash.com/photo-1617886322207-56096c001a90?w=1200&auto=format&fit=crop&q=80',
  'volkswagen-id7': 'https://images.unsplash.com/photo-1617886322207-56096c001a90?w=1200&auto=format&fit=crop&q=80',
  'volkswagen-arteon': 'https://images.unsplash.com/photo-1605816988069-b11383b50717?w=1200&auto=format&fit=crop&q=80',

  // Mercedes-Benz
  'mercedes-a-class': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&auto=format&fit=crop&q=80',
  'mercedes-c-class': 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&auto=format&fit=crop&q=80',
  'mercedes-e-class': 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1200&auto=format&fit=crop&q=80',
  'mercedes-s-class': 'https://images.unsplash.com/photo-1622195783016-cd6cf95f0e75?w=1200&auto=format&fit=crop&q=80',
  'mercedes-amg-gt': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&auto=format&fit=crop&q=80',
  'mercedes-gle': 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=1200&auto=format&fit=crop&q=80',
  'mercedes-g-class': 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=1200&auto=format&fit=crop&q=80',
  'mercedes-eqs': 'https://images.unsplash.com/photo-1637576903986-5d3f6de6f748?w=1200&auto=format&fit=crop&q=80',
  'mercedes-maybach-s-class': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',

  // BMW
  'bmw-3-series': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',
  'bmw-5-series': 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&auto=format&fit=crop&q=80',
  'bmw-7-series': 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&auto=format&fit=crop&q=80',
  'bmw-m3': 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200&auto=format&fit=crop&q=80',
  'bmw-m5': 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=1200&auto=format&fit=crop&q=80',
  'bmw-x5': 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=1200&auto=format&fit=crop&q=80',
  'bmw-x7': 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?w=1200&auto=format&fit=crop&q=80',
  'bmw-ix': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',
  'bmw-i7': 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200&auto=format&fit=crop&q=80',
  'bmw-z4': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&auto=format&fit=crop&q=80',

  // Porsche
  'porsche-911': 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&auto=format&fit=crop&q=80',
  'porsche-911-turbo-s': 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&auto=format&fit=crop&q=80',
  'porsche-911-gt3': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop&q=80',
  'porsche-718-cayman': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop&q=80',
  'porsche-taycan': 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=1200&auto=format&fit=crop&q=80',
  'porsche-cayenne': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'porsche-panamera': 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&auto=format&fit=crop&q=80',

  // Ferrari
  'ferrari-f8-tributo': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&auto=format&fit=crop&q=80',
  'ferrari-296-gtb': 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&auto=format&fit=crop&q=80',
  'ferrari-sf90-stradale': 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&auto=format&fit=crop&q=80',
  'ferrari-812-superfast': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&auto=format&fit=crop&q=80',
  'ferrari-roma': 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1200&auto=format&fit=crop&q=80',
  'ferrari-purosangue': 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&auto=format&fit=crop&q=80',

  // Lamborghini
  'lamborghini-huracan': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
  'lamborghini-aventador': 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&auto=format&fit=crop&q=80',
  'lamborghini-revuelto': 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&auto=format&fit=crop&q=80',
  'lamborghini-urus': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&auto=format&fit=crop&q=80',

  // Tesla - Verified high-quality images
  'tesla-model-3': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&auto=format&fit=crop&q=80',
  'tesla-model-y': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'tesla-model-s': 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&auto=format&fit=crop&q=80',
  'tesla-model-s-plaid': 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&auto=format&fit=crop&q=80',
  'tesla-model-x': 'https://images.unsplash.com/photo-1566055909643-a51b4271aa47?w=1200&auto=format&fit=crop&q=80',
  'tesla-cybertruck': 'https://images.unsplash.com/photo-1662469898570-14ce2ca66436?w=1200&auto=format&fit=crop&q=80',

  // Audi
  'audi-a3': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'audi-a4': 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&auto=format&fit=crop&q=80',
  'audi-a6': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&auto=format&fit=crop&q=80',
  'audi-a8': 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&auto=format&fit=crop&q=80',
  'audi-rs6': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'audi-r8': 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200&auto=format&fit=crop&q=80',
  'audi-q5': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'audi-q7': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'audi-e-tron-gt': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',
  'audi-q8-e-tron': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',

  // Bugatti
  'bugatti-chiron': 'https://images.unsplash.com/photo-1566023888558-ec8c9e24a78e?w=1200&auto=format&fit=crop&q=80',
  'bugatti-veyron': 'https://images.unsplash.com/photo-1566023888558-ec8c9e24a78e?w=1200&auto=format&fit=crop&q=80',
  'bugatti-divo': 'https://images.unsplash.com/photo-1566023888558-ec8c9e24a78e?w=1200&auto=format&fit=crop&q=80',
  'bugatti-mistral': 'https://images.unsplash.com/photo-1566023888558-ec8c9e24a78e?w=1200&auto=format&fit=crop&q=80',

  // McLaren
  'mclaren-720s': 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&auto=format&fit=crop&q=80',
  'mclaren-765lt': 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&auto=format&fit=crop&q=80',
  'mclaren-artura': 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&auto=format&fit=crop&q=80',
  'mclaren-750s': 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=1200&auto=format&fit=crop&q=80',

  // Rolls-Royce
  'rolls-royce-phantom': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',
  'rolls-royce-ghost': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',
  'rolls-royce-cullinan': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',
  'rolls-royce-spectre': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',
  'rolls-royce-wraith': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',

  // Bentley
  'bentley-continental-gt': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',
  'bentley-flying-spur': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',
  'bentley-bentayga': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',
  'bentley-mulliner-batur': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',

  // Aston Martin
  'aston-martin-db12': 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&auto=format&fit=crop&q=80',
  'aston-martin-vantage': 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&auto=format&fit=crop&q=80',
  'aston-martin-dbs': 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&auto=format&fit=crop&q=80',
  'aston-martin-dbx': 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&auto=format&fit=crop&q=80',
  'aston-martin-valkyrie': 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&auto=format&fit=crop&q=80',

  // Ford
  'ford-mustang': 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&auto=format&fit=crop&q=80',
  'ford-mustang-mach-e': 'https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=1200&auto=format&fit=crop&q=80',
  'ford-f-150': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',
  'ford-bronco': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',
  'ford-explorer': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',
  'ford-gt': 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=1200&auto=format&fit=crop&q=80',
  'ford-puma': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',

  // Honda
  'honda-civic': 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&auto=format&fit=crop&q=80',
  'honda-civic-type-r': 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&auto=format&fit=crop&q=80',
  'honda-accord': 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&auto=format&fit=crop&q=80',
  'honda-cr-v': 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&auto=format&fit=crop&q=80',
  'honda-hr-v': 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&auto=format&fit=crop&q=80',
  'honda-nsx': 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&auto=format&fit=crop&q=80',
  'honda-e': 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1200&auto=format&fit=crop&q=80',

  // Hyundai
  'hyundai-ioniq-5': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'hyundai-ioniq-6': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'hyundai-tucson': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'hyundai-santa-fe': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'hyundai-elantra-n': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'hyundai-sonata': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&auto=format&fit=crop&q=80',

  // Kia
  'kia-ev6': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'kia-ev9': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'kia-stinger': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'kia-sportage': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'kia-sorento': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'kia-k5': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&auto=format&fit=crop&q=80',

  // Lexus
  'lexus-lc-500': 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200&auto=format&fit=crop&q=80',
  'lexus-lfa': 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200&auto=format&fit=crop&q=80',
  'lexus-ls': 'https://images.unsplash.com/photo-1622195783016-cd6cf95f0e75?w=1200&auto=format&fit=crop&q=80',
  'lexus-rx': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'lexus-is': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',
  'lexus-rz': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',

  // Volvo
  'volvo-xc90': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'volvo-xc60': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'volvo-s90': 'https://images.unsplash.com/photo-1622195783016-cd6cf95f0e75?w=1200&auto=format&fit=crop&q=80',
  'volvo-ex90': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',
  'volvo-c40': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',

  // Land Rover
  'land-rover-range-rover': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'land-rover-defender': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'land-rover-discovery': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'land-rover-range-rover-sport': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'land-rover-velar': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',

  // Chevrolet
  'chevrolet-corvette': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&auto=format&fit=crop&q=80',
  'chevrolet-camaro': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&auto=format&fit=crop&q=80',
  'chevrolet-silverado': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',
  'chevrolet-tahoe': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'chevrolet-bolt-ev': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',

  // Nissan
  'nissan-gt-r': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
  'nissan-z': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&auto=format&fit=crop&q=80',
  'nissan-ariya': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'nissan-patrol': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'nissan-altima': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&auto=format&fit=crop&q=80',

  // Mazda
  'mazda-mx-5': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&auto=format&fit=crop&q=80',
  'mazda-3': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'mazda-cx-5': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'mazda-cx-60': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'mazda-6': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&auto=format&fit=crop&q=80',

  // Subaru
  'subaru-wrx': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'subaru-brz': 'https://images.unsplash.com/photo-1632441545366-65a03b789834?w=1200&auto=format&fit=crop&q=80',
  'subaru-outback': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'subaru-forester': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'subaru-solterra': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',

  // Jeep
  'jeep-wrangler': 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&auto=format&fit=crop&q=80',
  'jeep-grand-cherokee': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'jeep-gladiator': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',
  'jeep-compass': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'jeep-grand-wagoneer': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',

  // Peugeot
  'peugeot-208': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'peugeot-308': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'peugeot-508': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&auto=format&fit=crop&q=80',
  'peugeot-3008': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'peugeot-e-208': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',

  // Renault
  'renault-megane-e-tech': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'renault-clio': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'renault-austral': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'renault-scenic': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'renault-arkana': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',

  // Fiat
  'fiat-500': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'fiat-500e': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'fiat-panda': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'fiat-tipo': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',

  // Maserati
  'maserati-mc20': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
  'maserati-ghibli': 'https://images.unsplash.com/photo-1622195783016-cd6cf95f0e75?w=1200&auto=format&fit=crop&q=80',
  'maserati-quattroporte': 'https://images.unsplash.com/photo-1622195783016-cd6cf95f0e75?w=1200&auto=format&fit=crop&q=80',
  'maserati-levante': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'maserati-granturismo': 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200&auto=format&fit=crop&q=80',

  // Alfa Romeo
  'alfa-romeo-giulia': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',
  'alfa-romeo-stelvio': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'alfa-romeo-tonale': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'alfa-romeo-giulia-quadrifoglio': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',

  // Jaguar
  'jaguar-f-type': 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200&auto=format&fit=crop&q=80',
  'jaguar-xe': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',
  'jaguar-xf': 'https://images.unsplash.com/photo-1622195783016-cd6cf95f0e75?w=1200&auto=format&fit=crop&q=80',
  'jaguar-f-pace': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'jaguar-i-pace': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',

  // Mitsubishi
  'mitsubishi-outlander': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'mitsubishi-eclipse-cross': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'mitsubishi-asx': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'mitsubishi-l200': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',

  // Suzuki
  'suzuki-jimny': 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&auto=format&fit=crop&q=80',
  'suzuki-swift-sport': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'suzuki-vitara': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'suzuki-across': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',

  // Dacia
  'dacia-duster': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'dacia-jogger': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'dacia-sandero': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'dacia-spring': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',

  // Skoda
  'skoda-octavia': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&auto=format&fit=crop&q=80',
  'skoda-superb': 'https://images.unsplash.com/photo-1622195783016-cd6cf95f0e75?w=1200&auto=format&fit=crop&q=80',
  'skoda-kodiaq': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'skoda-enyaq': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',
  'skoda-octavia-rs': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',

  // Seat / Cupra
  'seat-leon': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'seat-ibiza': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'seat-ateca': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'cupra-formentor': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'cupra-born': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'cupra-leon': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'cupra-tavascan': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',

  // Citroen
  'citroen-c3': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'citroen-c4': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'citroen-c5-x': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&auto=format&fit=crop&q=80',
  'citroen-e-c4': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',

  // Cadillac
  'cadillac-escalade': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'cadillac-ct5': 'https://images.unsplash.com/photo-1622195783016-cd6cf95f0e75?w=1200&auto=format&fit=crop&q=80',
  'cadillac-lyriq': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',
  'cadillac-ct4': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',

  // Dodge
  'dodge-challenger': 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&auto=format&fit=crop&q=80',
  'dodge-charger': 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&auto=format&fit=crop&q=80',
  'dodge-durango': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'dodge-hornet': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',

  // Ram
  'ram-1500': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',
  'ram-2500': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',
  'ram-trx': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',

  // GMC
  'gmc-sierra': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',
  'gmc-yukon': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'gmc-hummer-ev': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',
  'gmc-canyon': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',

  // BYD
  'byd-atto-3': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',
  'byd-han': 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&auto=format&fit=crop&q=80',
  'byd-seal': 'https://images.unsplash.com/photo-1617704548623-340376564e68?w=1200&auto=format&fit=crop&q=80',
  'byd-tang': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',

  // Genesis
  'genesis-g80': 'https://images.unsplash.com/photo-1622195783016-cd6cf95f0e75?w=1200&auto=format&fit=crop&q=80',
  'genesis-g90': 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',
  'genesis-gv80': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'genesis-gv60': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',
  'genesis-g70': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',

  // Infiniti
  'infiniti-q50': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',
  'infiniti-q60': 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=1200&auto=format&fit=crop&q=80',
  'infiniti-qx80': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'infiniti-qx60': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',

  // Acura
  'acura-integra': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'acura-nsx': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
  'acura-tlx': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',
  'acura-mdx': 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80',
  'acura-zdx': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',

  // Lotus
  'lotus-emira': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
  'lotus-evija': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
  'lotus-eletre': 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?w=1200&auto=format&fit=crop&q=80',

  // Mini
  'mini-cooper': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'mini-jcw': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  'mini-countryman': 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  'mini-electric': 'https://images.unsplash.com/photo-1619317596488-e2fa37e80291?w=1200&auto=format&fit=crop&q=80',

  // Pagani
  'pagani-huayra': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
  'pagani-utopia': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
  'pagani-zonda': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
};

// Fallback images by brand category - high quality verified URLs
const fallbackImages: Record<string, string> = {
  sport: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&auto=format&fit=crop&q=80',
  luxury: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=1200&auto=format&fit=crop&q=80',
  suv: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&auto=format&fit=crop&q=80',
  electric: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&auto=format&fit=crop&q=80',
  sedan: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&auto=format&fit=crop&q=80',
  pickup: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=1200&auto=format&fit=crop&q=80',
  hatchback: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&auto=format&fit=crop&q=80',
  general: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&auto=format&fit=crop&q=80',
};

// Brand to category mapping - extended for all 50 brands
const brandCategories: Record<string, string> = {
  // Super Sport
  ferrari: 'sport',
  lamborghini: 'sport',
  mclaren: 'sport',
  bugatti: 'sport',
  pagani: 'sport',
  'aston-martin': 'sport',
  porsche: 'sport',
  lotus: 'sport',
  
  // Luxury
  'rolls-royce': 'luxury',
  bentley: 'luxury',
  maybach: 'luxury',
  'mercedes-benz': 'luxury',
  bmw: 'luxury',
  audi: 'luxury',
  lexus: 'luxury',
  genesis: 'luxury',
  jaguar: 'luxury',
  maserati: 'luxury',
  infiniti: 'luxury',
  acura: 'luxury',
  cadillac: 'luxury',
  volvo: 'luxury',
  
  // Electric
  tesla: 'electric',
  byd: 'electric',
  
  // SUV
  'land-rover': 'suv',
  jeep: 'suv',
  
  // General / Mainstream
  toyota: 'general',
  honda: 'general',
  volkswagen: 'general',
  ford: 'general',
  hyundai: 'general',
  kia: 'general',
  nissan: 'general',
  mazda: 'general',
  subaru: 'general',
  chevrolet: 'general',
  peugeot: 'general',
  renault: 'general',
  fiat: 'general',
  'alfa-romeo': 'sedan',
  mitsubishi: 'general',
  suzuki: 'general',
  dacia: 'general',
  skoda: 'general',
  seat: 'general',
  cupra: 'sport',
  citroen: 'general',
  dodge: 'sport',
  ram: 'pickup',
  gmc: 'pickup',
  mini: 'hatchback',
};

// Normalize model ID for lookup
const normalizeModelId = (modelId: string): string => {
  return modelId
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Generate fallback Unsplash URL based on brand/model
const generateUnsplashUrl = (brand: string, model: string): string => {
  const category = brandCategories[brand] || 'general';
  return fallbackImages[category] || fallbackImages.general;
};

export const getCarImage = (brandId: string, modelId: string): string => {
  const normalizedBrand = normalizeModelId(brandId);
  const normalizedModel = normalizeModelId(modelId);
  
  // Try exact match first
  if (carImageMap[normalizedModel]) {
    return carImageMap[normalizedModel];
  }

  // Try brand-model combination
  const brandModelKey = `${normalizedBrand}-${normalizedModel.replace(`${normalizedBrand}-`, '')}`;
  if (carImageMap[brandModelKey]) {
    return carImageMap[brandModelKey];
  }

  // Try partial match - look for keys containing the model name
  for (const [key, value] of Object.entries(carImageMap)) {
    const keyParts = key.split('-');
    const modelParts = normalizedModel.split('-');
    
    // Check if key starts with brand and contains any model part
    if (key.startsWith(normalizedBrand)) {
      for (const part of modelParts) {
        if (part.length > 2 && key.includes(part)) {
          return value;
        }
      }
    }
  }

  // Fallback to category-based image
  return generateUnsplashUrl(normalizedBrand, normalizedModel);
};

export const getBrandLogo = (brandId: string): string => {
  // Return placeholder logo - in production, would use actual brand logos
  const brandName = brandId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(brandName)}&background=0D1117&color=fff&size=128&font-size=0.33&bold=true`;
};
