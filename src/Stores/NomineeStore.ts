import BaseStore                     from "../Base/BaseStore";
import { observable }                from "mobx";
import { deserialize, serialize }    from "serializr";
import { Container }                 from "typedi";

import AjaxService                   from "../Services/AjaxService";
import Nominee                       from "../Classes/Nominee";

export const MAX_ITEMS_PER_PAGE = 20;

export class NomineeStore extends BaseStore {
    public static readonly NAME_STORE: string = "NomineeStore";

    private getAjaxService(): AjaxService {
        return Container.get(AjaxService);
    }

    /**
     * Get nominees list related with current year
     *
     * @memberof NomineeStore
     */
    public getCMVPSList = async(): Promise<any> => {
        const response = await this.getAjaxService().getCurrentYearNominees();

        if (response.data || response.data.status || response.data.data) {
            const nomineeList = response.data.data.map( (nominee: Nominee, index: number) => {
                return deserialize(Nominee, nominee);
            });

            return nomineeList;
        }

        return [];
    }
}