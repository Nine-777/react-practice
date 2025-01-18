// ---- API ----
import { Comment } from '../../types/api';
// ---- Component ----
import Heading from '../../components/typography/Heading';
import Card from '../../components/card/Card';
import Title from '../../components/card/Title';
import Body from '../../components/card/Body';

type Props = {
  id: string | undefined;
  comments: Comment[] | undefined;
};

export default function Comments(props: Props) {
  return (
    <>
      <Heading level="h6" label="コメント一覧" align="left" />
      {props.comments?.slice(0, 10).map((comment) => {
        return (
          <Card>
            <Title level="title-md" label={comment.name} />
            <Body level="body-sm" label={comment.body} />
          </Card>
        );
      })}
    </>
  );
}
