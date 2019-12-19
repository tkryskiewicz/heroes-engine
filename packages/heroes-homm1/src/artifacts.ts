import { Artifact } from "./Artifact";

export const constructArtifact = (artifact: string, data: {} = {}): Artifact => ({
  data,
  dataId: artifact,
  id: artifact,
});
