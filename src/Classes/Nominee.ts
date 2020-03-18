import { observable }    from "mobx";
import { serializable }  from "serializr";

import User              from "../User/User";
import NomineeSupport    from "./NomineeSupport";
import formatDate        from "../config/formatDate";

const moment = require("moment");

class Nominee {
    @serializable
    private id: string;

    @serializable
    private employeeId: string;

    @observable
    @serializable
    private nominatedBy: string;

    @observable
    @serializable
    private additionalInformation: NomineeSupport[];

    @observable
    @serializable
    private status: string;

    @observable
    @serializable
    private user: User;

    @observable
    @serializable
    private updatedAt: string;

    /**
     * Getter id
     * @return {string}
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Getter employeeId
     * @return {string}
     */
    public getEmployeeId(): string {
        return this.employeeId;
    }

    /**
     * Getter nominatedBy
     * @return {string}
     */
    public getNominatedBy(): string {
        return this.nominatedBy;
    }

    /**
     * Setter nominatedBy
     * @param {string} value
     */
    public setNominatedBy(value: string) {
        this.nominatedBy = value;
    }

    /**
     * Getter additionalInformation
     * @return {NomineeSupport[]}
     */
    public getAdditionalInformation(): NomineeSupport[] {
        return this.additionalInformation;
    }

    /**
     * Setter additionalInformation
     * @param {NomineeSupport[]} value
     */
    public setAdditionalInformation(value: NomineeSupport[]) {
        this.additionalInformation = value;
    }

    /**
     * Getter status
     * @return {string}
     */
    public getStatus(): string {
        return this.status;
    }

    /**
     * Setter status
     * @param {string} value
     */
    public setStatus(value: string) {
        this.status = value;
    }

    /**
     * Getter user
     * @return {User}
     */
    public getUser(): User {
        return this.user;
    }

    /**
     * Get updatedAt using the 'MMMM YYYY' date format
     * @return {string}
     */
    public getUpdatedAtFormat(): string {
        return moment(this.updatedAt).format(formatDate.shortDate);
    }

    /**
     * Setter updatedAt
     * @param {string} value
     */
    public setUpdatedAt(value: string) {
        this.updatedAt = value;
    }

}

export default Nominee;