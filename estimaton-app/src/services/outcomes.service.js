
import http from '../common/http-common'


class OutcomesDataService
{
    getAll() {
        return http.get(`api/outcomes/`);
      }
    
      get(id) {
        return http.get(`api/outcomes/${id}`);
      }
    
      create(data) {
        return http.post("api/outcomes", data);
      }
    
      update(id, data) {
        return http.put(`api/outcomes/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`api/outcomes/${id}`);
      }
}

export default new OutcomesDataService();
