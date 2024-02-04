import { Container } from "semantic-ui-react";
import { Separator } from "@/components/Shared";
import { Video } from "./Video";
import { Gallery } from "./Gallery";

export function Media(props) {
  const { video, screenshots } = props;

  return (
    <Container>
      <Separator height={30} />
      <Video video={video} />
      <Separator height={30} />
      <Gallery screenshots={screenshots} />
    </Container>
  );
}
