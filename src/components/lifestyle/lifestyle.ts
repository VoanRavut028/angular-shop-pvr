import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { LifestyleService } from '../../services/lifesstyle/lifestyle';
import { LifeStyleVM } from './lifestyle.vm';

@Component({
  selector: 'app-lifestyle',
  imports: [],
  templateUrl: './lifestyle.html',
  styleUrl: './lifestyle.css',
})
export class Lifestyle implements OnInit {
  private service = inject(LifestyleService);
  displayLifeStyleList: Array<LifeStyleVM> = new Array<LifeStyleVM>();
  ngOnInit(): void {
    this.loadProducts();
  }
  async loadProducts(): Promise<void> {
    const datas = await firstValueFrom(this.service.getLifeStyleData());
    this.displayLifeStyleList = datas;
    console.log(this.displayLifeStyleList);
  }
}
