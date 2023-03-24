import { connect } from 'dva';
import '../theme/DrakeTyporaTheme/drake-juejin.css';

const MarkdownDocument = (props) => {
  console.log(333, props.markdownDocument.documentBody);
  return (
    <div dangerouslySetInnerHTML={{__html:props.markdownDocument.documentBody}}></div>
  );
}

MarkdownDocument.propTypes = {
};

function mapStateToProps({ markdownDocument }) {
  return { markdownDocument };
}

export default connect(mapStateToProps)(MarkdownDocument);
