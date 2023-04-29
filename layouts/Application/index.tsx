import { Loading, GenresTopBar } from '@components';
import { useGenres } from '@hooks';

type ApplicationType = {
  isLoading?: boolean;
  children: React.ReactNode;
};

const Application = ({ isLoading, children }: ApplicationType) => {
  const { isLoading: isLoadingGenres } = useGenres();

  return (
    <div>
      <GenresTopBar />
      {children}
      {(isLoading || isLoadingGenres) && <Loading />}
    </div>
  );
};

export default Application;
