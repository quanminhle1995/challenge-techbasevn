import { ICountry } from "@/interface/ICountry";
import { BehaviorSubject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { Observable } from "rxjs/internal/Observable";
import { map } from 'rxjs/operators';
class DataService {
  public loadingSub = new BehaviorSubject(false);
  public getLoading = this.loadingSub.asObservable();
  getCountries() {
    return this.get("https://api.covid19api.com/countries").pipe(map(res => {
      return res.response.map(((item: any) => {
        return {
          country: item.Country,
          iso2: item.ISO2,
          slug: item.Slug
        } as ICountry;
      }))
    }));
  }

  getDataByCountry(slugCountry: string) {
    this.loadingSub.next(true);
   return this.get(`https://api.covid19api.com/total/country/${slugCountry}`).pipe(map(res => {
     return res.response.map((item: any) => {
      this.loadingSub.next(false);
      return {
        country: item.Country,
        confirmed: item.Confirmed,
        deaths: item.Deaths,
        recovered: item.Recovered,
        date: item.Date
      } as ICountry;
     });
   }))
  }

  setLoading(loading: boolean) {
    return this.loadingSub.next(loading);
  }

  get(url: string, data?: any): Observable<any> {
    return ajax({
      url: url,
      method: "GET",
      headers: { "content-type": "application/json" },
      body: data
    });
  }
}
export default new DataService();