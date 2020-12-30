
import http from '../common/http-common'


class ExternalTeamsService
{
    getAll() {
        return http.get(`api/externalteams/`);
      }
    
      get(id) {
        return http.get(`api/externalteams/${id}`);
      }
    
      create(data) {
        return http.post("api/externalteams", data);
      }
    
      update(id, data) {
        return http.put(`api/externalteams/${id}`, data);
      }
    
      delete(id) {
        return http.delete(`api/externalteams/${id}`);
      }
}

export default new ExternalTeamsService();
