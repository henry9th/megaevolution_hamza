import FiltersCard from './FiltersCard';
import SearchBar from './SearchBar';

const FindSection = () => {
  return (
    <div className="mt-5 pt-5">
      <h2 className="text-center">Find your metaverse Creators</h2>
      <SearchBar />
      <FiltersCard />
    </div>
  );
};

export default FindSection;
