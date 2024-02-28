import './styles.css';
import { useEffect, useState } from "react";
import { UserDTO } from "../../../models/user";
import Button from "../../../components/Button";
import NotFound from "../../../components/NotFound";
import UserCard from "../../../components/UserCard";
import axios from "axios";

type FormData = {
    user: string;
}

export default function HomeResult(){

    const url = 'https://api.github.com/users';

    const [formData, setFormData] = useState<FormData>({
        user: ''
    });

    const [conditions, setConditions] = useState({
        showResponse: false,
        noContent: false
    });

    const [click, setClick] = useState(0);

    const [profile, setProfile] = useState<UserDTO>({
        imgUrl: '',
        followers: 0,
        location: '',
        name: '',
        profile: ''
    });

    function handleSubmit(event: any){
        event.preventDefault();
        setClick(click + 1);
        formData.user === ''
            ? setConditions({ ...conditions, showResponse: false})
            : setConditions({ ...conditions, showResponse: true})
    }

    function handleInputChange(event: any){
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name]: value})
    }

    useEffect(() => {
        if (formData.user != '')
            axios.get(url + formData.user)
                .then(response => {
                    setConditions({...conditions, noContent: false});
                    setProfile({
                        imgUrl: response.data.avatar_url,
                        followers: Number(response.data.followers),
                        location: response.data.location,
                        name: response.data.name,
                        profile: response.data.url,
                    });
                }).catch(() => setConditions({...conditions, noContent: true}));
    },[click]);

    return(
        <main>
            <section className="searchUser-section">
                <div className="searchUser-card">
                    <h3>Encontre o perfil GitHub</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            name='user'
                            value={formData.user} 
                            type="text"
                            placeholder="Usuário GitHub"
                            onChange={handleInputChange}
                        />
                        <div>
                            <Button text="Encontrar"/>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                {
                    !conditions.showResponse
                    ? (<></>)
                    : conditions.noContent
                        ?(<NotFound />)
                        :(<UserCard user={profile}/>)
                }
            </section>
        </main>
    );

}