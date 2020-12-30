
import http from '../common/http-common'


class PaymentsDomainsService
{
    getAll() {
        return http.get(`api/paymentsdomains/`);
      }
    
      get(id) {
        return http.get(`api/paymentsdomains/${id}`);
      }
    
      create(data) {
        return http.post("api/paymentsdomains", data);
      }
    
      update(id, data) {
        return http.put(`api/paymentsdomains/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`api/paymentsdomains/${id}`);
      }
}

export default new PaymentsDomainsService();
