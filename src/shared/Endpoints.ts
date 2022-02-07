// Endpoints
// created by Carmine Rumma <carmine_rumma@epam.com> at 20220207 09:22.
// 
// 

export class Endpoints{

  /**
   * coinListURL
   * @param path 
   * @param currency 
   * @param perPage 
   * @param page 
   * @returns URL
   */
  coinListURL(
    path: string,
    currency: string,
    perPage: number,
    page: number
  ): URL {
  
    const baseUrl = new URL('https://api.coingecko.com');
  
    baseUrl.pathname += `api/v3/${path}`;
  
    baseUrl.searchParams.append('vs_currency', currency);
    baseUrl.searchParams.append('order', 'market_cap_desc');
    baseUrl.searchParams.append('per_page', perPage + '');
    baseUrl.searchParams.append('page', page + '');
  
    return baseUrl;
  }
  
  /**
   * coinDetailURL
   * @param path 
   * @param coinId 
   * @returns URL
   */
  coinDetailURL(path: string, coinId: string): URL {
    const baseUrl = new URL('https://api.coingecko.com');
    baseUrl.pathname += `/api/v3/${path}/${coinId}`;
    return baseUrl;
  }
}

