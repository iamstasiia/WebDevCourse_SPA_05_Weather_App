import { currentYear } from "../../functions/currentYear.func.js";

const FooterComponent = () => {
    return (
        <footer>
            <small>
                &copy;{currentYear()} AFJJS. All rights reserved. This site is
                provided "as is" without any warranties, express or implied. We
                are not liable for any losses or damages arising from the use of
                this site.
            </small>
        </footer>
    );
};

export default FooterComponent;
