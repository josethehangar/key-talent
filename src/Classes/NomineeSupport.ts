import { serializable }  from "serializr";
import { observable }    from "mobx";

class NomineeSupport {
    @observable
    @serializable
    private question: string;

    @observable
    @serializable
    private answer: string;

    /**
     * Getter question
     * @return {string}
     */
    public getQuestion(): string {
        return this.question;
    }

    /**
     * Setter question
     * @param {string} value
     */
    public setQuestion(value: string) {
        this.question = value;
    }

    /**
     * Getter answer
     * @return {string}
     */
    public getAnswer(): string {
        return this.answer;
    }

    /**
     * Setter answer
     * @param {string} value
     */
    public setAnswer(value: string) {
        this.answer = value;
    }
}

export default NomineeSupport;