import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LifeStyleVM } from '../../components/lifestyle/lifestyle.vm';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LifestyleService {
  private url = 'datas/lifestyle/lifestyle.json';
  private http = inject(HttpClient);
  getLifeStyleData(): Observable<LifeStyleVM[]> {
    return this.http.get<{ lifeStyleProducts: LifeStyleVM[] }>(this.url).pipe(
      map((response) =>
        response.lifeStyleProducts.map((item) => ({
          id: item.id,
          price: item.price,
          title: item.title,
          brand: item.brand,
          displayImg: item.displayImg,
          fadeImg: item.fadeImg,
          colors: item.colors,
        }))
      )
    );
  }
}
