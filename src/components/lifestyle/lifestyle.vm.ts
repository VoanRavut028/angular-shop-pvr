interface colors {
  name: string;
  class: string;
}

export class LifeStyleVM {
  id: string = '';
  price: number = 0;
  title: string = '';
  colors: colors[] = [];
  brand: string = '';
  displayImg: string = '';
  fadeImg: string = '';
}
