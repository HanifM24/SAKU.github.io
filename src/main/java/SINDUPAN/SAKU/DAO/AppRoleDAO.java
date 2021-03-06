package SINDUPAN.SAKU.DAO;

import SINDUPAN.SAKU.Mapper.AppRoleMapper;
import SINDUPAN.SAKU.Model.AppRoleModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.sql.DataSource;
import java.util.List;

@Repository
@Transactional

public class AppRoleDAO extends JdbcDaoSupport {
    @Autowired
    public AppRoleDAO(DataSource dataSource) {
        this.setDataSource(dataSource);
    }

    public List<String> getRoleNames(Long userId) {
        String sql = "Select r.Role_Name " //
                + " from User_Role ur, App_Role r " //
                + " where ur.Role_Id = r.Role_Id and ur.User_Id = ? ";

        Object[] params = new Object[] { userId };

        List<String> roles = this.getJdbcTemplate().queryForList(sql, params, String.class);

        return roles;
    }
    public List<AppRoleModel> getRoleNameApp() {
        String sql = "Select r.Role_Name  \n" +
                "from App_Role r";
        List<AppRoleModel> roles = this.getJdbcTemplate().query(sql, new AppRoleMapper());

        return roles;
    }

}
