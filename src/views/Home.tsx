import * as React                           from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { observer }                         from "mobx-react";
import { Container, Row, Col }              from "reactstrap";

import { prefix }                           from "../../Utils/prefix";
import Button                               from "../Components/Forms/Button";
import CMVPContainer                        from "../Components/Global/CMVPContainer/CMVPContainer";
import SquareItem                           from "./Home/SquareItem";
import NominateList, { headers }            from "./Home/NominatesList";
import Nominee                              from "../../Models/Nominee/Nominee";

interface HomeProps extends WithTranslation {
    me: any;
    events: {
        go: () => void;
    };
    listNominees: Nominee[];
}

@observer
class Home extends React.Component<HomeProps, any> {

    private static readonly imagesPath: string = "/images/pages/home";

    private static headers: headers[];

    public constructor(props: HomeProps) {
        super(props);

        Home.headers = [
            {
                "className": "headers",
                "row"  : {},
                "title": props.t("homepage.employee-section.employee")
            },
            {
                "className": "headers",
                "row"  : {},
                "title": props.t("homepage.employee-section.month")
            }
        ];
    }

    public render(): React.ReactNode {
        const { events, t, listNominees, me } = this.props;

        return (
            <React.Fragment>
                <section className={`${prefix}-primary-color-theme ${prefix}-home-hero`}>
                    <Container>
                        <Row className="flex-column justify-content-center align-items-center">
                            <h3 className={`${prefix}-headlines-secondary small light`}>{`${t("homepage.welcome")} ${me.getProfileData().getFullname()}`}</h3>
                            <h1 className={`${prefix}-headlines-primary large light`}>{t("homepage.main-header")}</h1>
                            <Button className={`btn-pink`} action={events.go} title={t("homepage.nominateBtn")}/>
                        </Row>
                    </Container>
                </section>
                <section className={`${prefix}-octary-color-theme`}>
                    <Container>
                        <Row>
                            <Col>
                                <CMVPContainer id="eligibility-home" className={`eligibility-home ${prefix}-base-color-theme apply-radius`}>
                                    <Row>
                                        <Col xs="12" md="6" className="d-flex justify-content-center flex-column">
                                            <p className={`${prefix}-headlines-primary extra-large ${prefix}-nonary-color`}>{t("homepage.eligibility-section.eligibility")}</p>
                                            <p className={`${prefix}-titles medium ${prefix}-senary-color period-description`} dangerouslySetInnerHTML={{__html: t("homepage.eligibility-section.nomination", {period: t("homepage.eligibility-section.period")})}}></p>
                                        </Col>
                                        <Col xs="12" md="6">
                                            <ul className={`${prefix}-paragraph-tertiary medium list-goals`}>
                                                <li className="goal">{t("homepage.list-goals.breathesDigital")}</li>
                                                <li className="goal">{t("homepage.list-goals.callDuty")}</li>
                                                <li className="goal">{t("homepage.list-goals.says")}</li>
                                                <li className="goal">{t("homepage.list-goals.inspires")}</li>
                                                <li className="goal">{t("homepage.list-goals.learning")}</li>
                                                <li className="goal">{t("homepage.list-goals.satisfied")}</li>
                                                <li className="goal">{t("homepage.list-goals.consistently")}</li>
                                                <li className="goal">{t("homepage.list-goals.brand")}</li>
                                                <li className="goal">{t("homepage.list-goals.problemSolving")}</li>
                                                <li className="goal">{t("homepage.list-goals.results")}</li>
                                                <li className="goal">{t("homepage.list-goals.reliable")}</li>
                                                <li className="goal">{t("homepage.list-goals.initiative")}</li>
                                            </ul>
                                            <p className={`${prefix}-titles medium ${prefix}-senary-color question`}>{t("homepage.eligibility-section.question")}
                                                &nbsp;<a className={`${prefix}-secondary-color`} href={`mailto:${t("homepage.eligibility-section.email")}`}>{t("homepage.eligibility-section.email")}</a>
                                            </p>
                                        </Col>
                                    </Row>
                                </CMVPContainer>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CMVPContainer id="prizes-home" className={`prizes-home container-fluid px-0`}>
                                    <h2 className={`${prefix}-headlines-primary medium ${prefix}-nonary-color`}>{t("homepage.prizes-section.title")}</h2>
                                    <Row>
                                        <Col xs="6" lg="3">
                                            <SquareItem
                                            className={`${prefix}-base-color-theme apply-radius mb-sm-4`}
                                            description={t("homepage.prizes-section.bagDescription")}
                                            image={`${Home.imagesPath}/icon_bag.png`}
                                            imageDescription={t("homepage.prizes-section.bagWAI")}
                                            title={t("homepage.prizes-section.bag")}/>
                                        </Col>
                                        <Col xs="6" lg="3">
                                            <SquareItem
                                            className={`${prefix}-base-color-theme apply-radius`}
                                            description={t("homepage.prizes-section.mugDescription")}
                                            image={`${Home.imagesPath}/icon_mug.png`}
                                            imageDescription={t("homepage.prizes-section.mugWAI")}
                                            title={t("homepage.prizes-section.mug")}/>
                                        </Col>
                                        <Col xs="6" lg="3">
                                            <SquareItem
                                            className={`${prefix}-base-color-theme apply-radius`}
                                            description={t("homepage.prizes-section.iPadDescription")}
                                            image={`${Home.imagesPath}/icon_ipad.svg`}
                                            imageDescription={t("homepage.prizes-section.iPadWAI")}
                                            title={t("homepage.prizes-section.iPad")}/>
                                        </Col>
                                        <Col xs="6" lg="3">
                                            <SquareItem
                                            className={`${prefix}-base-color-theme apply-radius`}
                                            description={t("homepage.prizes-section.tripDescription")}
                                            image={`${Home.imagesPath}/icon_vegas.png`}
                                            imageDescription={t("homepage.prizes-section.tripWAI")}
                                            title={t("homepage.prizes-section.trip")}/>
                                        </Col>
                                    </Row>
                                </CMVPContainer>
                            </Col>
                        </Row>
                        <Row className={`${(!listNominees.length) ? "d-none" : "" }`}>
                            <Col>
                                <CMVPContainer id="nominations-home-list" className={`nominations-home-list px-0`}>
                                    <h2 className={`${prefix}-headlines-primary medium  ${prefix}-nonary-color`}>{t("homepage.nominations-section.title")}</h2>
                                    <NominateList
                                    headers={Home.headers}
                                    nominates={listNominees}/>
                                </CMVPContainer>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default withTranslation("pages")(Home);