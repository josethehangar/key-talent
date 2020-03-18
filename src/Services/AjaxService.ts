import AxiosService from "./AxiosService";
import { AxiosInstance, AxiosPromise }  from "axios";

export default class AjaxService {
    private getAxios(): AxiosInstance {
        return Container.get(AxiosService).axios;
    }

    protected replaceURL(url: string, params: object = {}) {
        for (const key in params) {
            url = url.replace(`:${key}`, params[key]);
        }

        return url;
    }

    // Get user info using slug
    public getUserBySlug(slug: string): AxiosPromise<any> {
        const url = this.replaceURL(API_CONST.GET_USER_BY_SLUG, {
            slug
        });

        return this.getAxios().get(url);
    }

    // Get roles from API
    public getActiveRoles(): AxiosPromise<any> {
        return this.getAxios().get(API_CONST.GET_ROLES);
    }

    // Nominees per year
    public getCurrentYearNominees(): AxiosPromise<any> {
        return this.getAxios().get(API_CONST.GET_NOMINEES);
    }
}