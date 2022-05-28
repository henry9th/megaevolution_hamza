import PersonalCard from './PersonalCard';
import LinksCard from './LinksCard';

const ProfileSection = () => {
  return (
    <div className="mt-5 pt-4">
      <div className="d-flex align-items-center gap-4">
        <h3>Profile</h3>
        <span className="badge rounded-pill badge-secondary mb-4">Creator</span>
      </div>

      <div className="row">
        <div className="col-12 col-lg-3">
          <PersonalCard />
        </div>
        <div className="col-12 col-lg-9 mt-3 mt-lg-0">
          <LinksCard />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
