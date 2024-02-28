import { UserDTO } from "../../models/user";

type Props = {
  user: UserDTO;
};

export default function UserCard({ user }: Props) {
  return (
    <main>
      <section id="user-section">
        <div className="use-card">
          <div className="user-img">
            <img src={user.imgUrl} alt={user.name} />
          </div>
          <div className="user-information">
            <h4>Informações</h4>
            <div className="user-data">
              <h5>Perfil: </h5>
              <a>{user.profile}</a>
            </div>
            <div className="user-data">
              <h5>Seguidores: </h5>
              <a>{user.followers}</a>
            </div>
            <div className="user-data">
              <h5>Localidade: </h5>
              <a>{user.location}</a>
            </div>
            <div className="user-data">
              <h5>Nome: </h5>
              <a>{user.name}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
