import React from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Container, LogoutButton, Wrapper } from "./style";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import Button from "../Generic/Button";
const { Sider } = Layout;

const MyProfile = () => {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem("token");
		setTimeout(() => {
			navigate("/home");
		}, 900);
	};

	return (
		<Wrapper>
			<Layout>
				<Sider trigger={null}>
					<Menu theme="dark" defaultSelectedKeys={["1"]}>
						<Menu.Item key={"1"}>
							<UserOutlined />
							<span>My Information</span>
						</Menu.Item>
						<Menu.Item className="logout active" key={"2"} onClick={logout}>
							<LogoutOutlined />
							<LogoutButton>Log Out</LogoutButton>
						</Menu.Item>
					</Menu>
				</Sider>
				<Container>
					<Button onClick={() => navigate("/addnew")} type={"primary"}>
						Add New
					</Button>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Dignissimos cum quia sunt maxime ipsum alias eos libero tempore
						magnam labore aliquid doloribus perspiciatis, vitae sequi ratione.
						Quas esse reprehenderit, repellat fugiat quo autem vero ipsam
						tempora modi earum nisi laudantium possimus aliquam praesentium!
						Voluptate provident non hic laboriosam accusamus obcaecati
						architecto distinctio quis. Et iusto perferendis autem laudantium
						magnam vel voluptas quidem architecto nesciunt eligendi quo sunt
						minima nobis rem aliquam optio porro itaque a, quis accusantium!
						Delectus fuga tempora molestiae debitis explicabo eveniet provident
						non hic autem. Officiis placeat corrupti obcaecati facilis labore
						natus repellendus earum ratione dicta, ex, assumenda iste veniam
						autem, cum quam vero optio repudiandae veritatis fugit eum facere
						sapiente? Repudiandae, aperiam nostrum quos atque expedita aliquid
						est autem! Eius, maiores quod? Quos, inventore! Odio, molestias! Hic
						explicabo unde exercitationem libero cum ad fuga sapiente
						repellendus commodi aliquam doloribus accusamus est a excepturi,
						magni nesciunt totam. Quaerat perspiciatis, sunt illum
						exercitationem fuga consectetur quos recusandae quam dolor
						voluptatibus maxime voluptatem totam iste magnam quae alias voluptas
						sapiente quidem aut, cumque blanditiis assumenda, excepturi veniam
						consequuntur? Unde tenetur autem iure veniam amet! Quos nisi
						excepturi maiores modi repudiandae odio aperiam cum fuga est
						necessitatibus voluptate sapiente, officiis labore molestiae iste
						dolorem! Magni vero harum rem debitis explicabo inventore architecto
						autem? Magni in vitae quia dolore blanditiis tempore dolorum
						expedita! Ipsa velit ea, repudiandae vero similique, ad repellendus
						placeat omnis tempore nisi quibusdam mollitia sint, incidunt alias
						at. Error id nam, nostrum harum eum repellendus tenetur quam
						architecto maiores consectetur inventore provident ad? Soluta ipsam
						reiciendis distinctio eos eveniet nesciunt aut, suscipit rem ducimus
						voluptas praesentium veniam consequatur dolores deleniti molestiae,
						dolorum delectus. Temporibus quis odio ex iusto debitis error
						necessitatibus non at et voluptate veniam ratione repudiandae,
						recusandae voluptas, minus pariatur est, sunt quidem esse ea aut.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
						veritatis laborum vel quidem quibusdam accusantium veniam
						exercitationem nemo ratione totam sapiente optio et, perspiciatis
						fuga recusandae reprehenderit eos repudiandae reiciendis quo
						excepturi esse tempora. Eligendi esse debitis quis cum similique,
						libero at odit maxime quidem exercitationem neque vitae vero quos
						sunt ullam ratione fugiat veniam voluptatem itaque repellendus
						tempore! Delectus eaque deleniti quam nihil officia harum ducimus
						repellendus eveniet animi, odit repudiandae fugit in pariatur
						cupiditate autem? Assumenda culpa ipsum nam error quo odit mollitia
						fugiat? Cumque repellendus animi dolorum officia placeat expedita
						atque perspiciatis a iure, eos asperiores pariatur vero,
						voluptatibus suscipit incidunt accusantium nihil porro eum unde sed
						nesciunt eaque numquam sapiente. Non ab quo accusantium impedit
						consequatur id ipsum vel fugit illum rerum. Similique ullam ducimus
						quaerat deleniti eaque, earum et minus molestiae aliquid voluptates
						quod esse dolorem dolores omnis quisquam voluptatum eos velit fugit
						facilis cum sed provident! Sint nostrum aliquam quaerat maxime iure
						officiis, nam, ad voluptatem error enim provident unde adipisci
						aperiam nisi sapiente, sequi dolores. Id ratione laudantium, officia
						quam incidunt quisquam repellat rem rerum architecto totam,
						voluptatibus tenetur iste dolore harum, voluptas laboriosam
						molestias eveniet consequatur corrupti nihil ad laborum. Distinctio
						voluptas hic pariatur commodi, vero inventore, doloribus beatae
						optio, quos provident voluptate laudantium expedita corporis velit
						aperiam molestias praesentium assumenda nam similique iste sunt
						ipsam? Asperiores assumenda aut quas nobis molestiae voluptatum
						animi cupiditate sint, culpa expedita iste nisi dolorem quam iusto
						perspiciatis temporibus accusamus, nam in odio placeat? Doloremque
						at blanditiis illum quo omnis nihil quam deleniti ducimus vitae
						esse. Incidunt odit consectetur quidem, amet corrupti aut
						laudantium? Reiciendis eveniet libero amet eum officiis facere
						molestias ea adipisci hic accusantium magnam consectetur aut modi
						deserunt, perspiciatis sed? Maxime qui quod labore ipsa minima odit.
						Quod, nostrum obcaecati? Iusto perferendis ratione ipsum velit eos
						iste amet sit labore. Recusandae asperiores architecto quaerat
						pariatur sapiente necessitatibus tenetur modi, vel, dicta voluptatem
						a. Voluptates, modi quasi! Quas excepturi at inventore qui eos modi
						facere dicta odit velit recusandae libero pariatur tenetur doloribus
						a nobis aliquid ipsam, autem officiis ipsum? Saepe, recusandae et
						blanditiis dignissimos, hic eos accusantium repudiandae error quidem
						eligendi cum sed reprehenderit nisi culpa, vitae quia quis! Saepe
						veniam, voluptate incidunt, dolor, odit provident expedita obcaecati
						quam nobis hic explicabo omnis enim nostrum. Ab id fugit qui maiores
						delectus eveniet saepe distinctio facere. Quia eaque ipsum vel,
						tempore minima accusamus culpa temporibus omnis, facere iste
						facilis, incidunt eius soluta magni. Molestias dolore temporibus,
						itaque iste nisi quia. Accusamus, architecto. Explicabo saepe
						maxime, delectus eius aspernatur velit nisi fugiat incidunt dicta!
						Quae, consequatur illum! Nostrum veniam animi, repellendus repellat
						corporis ipsam, iure similique, doloribus non odio earum. Rem vero
						quam nesciunt maxime necessitatibus eum minus! Tempora, nisi
						corrupti alias ipsa ipsum officia autem asperiores id, omnis nostrum
						laboriosam obcaecati, amet voluptatem sed? Voluptas placeat itaque
						doloribus! Quibusdam perspiciatis libero corrupti ratione harum
						consequuntur quia natus velit hic porro! Perspiciatis repellat modi
						doloribus placeat quasi est, mollitia nisi ex nostrum quas? Incidunt
						non blanditiis a porro totam, eius quaerat architecto, corporis
						soluta cum inventore exercitationem natus nobis cupiditate quos quis
						minima? Praesentium quos libero possimus id cupiditate odio modi
						debitis itaque molestiae. Ab eligendi cupiditate nisi consectetur
						rerum quibusdam ipsa veritatis tempora voluptatem in quidem
						architecto obcaecati aut perspiciatis, id neque maiores dolore
						aliquam, veniam qui aspernatur quae, deserunt possimus. Voluptatibus
						rem culpa consequuntur quisquam. Explicabo deserunt placeat aut!
						Aliquam quidem doloribus eveniet, explicabo dicta impedit minus
						iusto dolores? Quod reprehenderit obcaecati laboriosam tenetur
						officia libero voluptatum minima aliquam eius necessitatibus quos,
						asperiores voluptas ea doloribus, consequuntur beatae. Possimus quia
						maiores accusamus odio consequatur voluptatum, autem illo sint culpa
						vel laudantium! Voluptatem, iusto, libero tenetur incidunt assumenda
						quam corporis omnis esse quo obcaecati perspiciatis quos odit magni,
						possimus molestiae impedit placeat soluta vitae eos! Suscipit
						recusandae provident necessitatibus reiciendis eligendi! Veniam
						laudantium a commodi quibusdam sequi nihil perspiciatis eligendi
						delectus rem optio dignissimos, eaque quod similique culpa, cum enim
						quaerat nemo. Impedit iure doloribus natus explicabo reiciendis
						laudantium possimus suscipit sed quas repellat. Accusamus harum
						libero, itaque suscipit maiores eligendi aut dolorum atque
						perspiciatis ipsam quas, totam neque nemo saepe mollitia excepturi
						eum deserunt et, sapiente nihil hic iste expedita nobis! Culpa
						quisquam impedit ab perspiciatis distinctio autem libero deleniti
						recusandae nesciunt veritatis deserunt ea, veniam similique
						accusantium amet, est consequuntur debitis rerum maxime harum.
						Consectetur nulla facere laborum eligendi magnam, amet laboriosam
						fugit consequuntur quidem velit esse excepturi nemo consequatur
						culpa tempora optio facilis? Totam alias optio quo repellat
						praesentium! Voluptatem delectus porro est, dignissimos vitae
						tenetur voluptas ab corporis culpa velit maxime dicta exercitationem
						nam, sit voluptatibus provident illo dolores beatae iusto voluptates
						blanditiis a veritatis labore vero? Quis at fugiat dicta quam
						dolores maxime, iusto aliquid necessitatibus nobis culpa commodi in
						aliquam! Porro distinctio iure esse cupiditate repudiandae labore
						temporibus vero incidunt ipsa adipisci voluptatum unde, voluptas,
						corporis atque qui aliquam modi nihil enim nisi et pariatur harum
						debitis sed magni! Libero aliquam consequatur perspiciatis dolore
						recusandae deserunt fugit cupiditate praesentium suscipit. Fugit
						autem doloribus ut praesentium dolores, dignissimos veritatis
						voluptates delectus error, repudiandae harum! Eum laboriosam
						repudiandae temporibus provident nemo odit consequuntur corrupti,
						dolorum iure voluptatibus. Excepturi odio tempora velit alias, ullam
						reiciendis, saepe nihil itaque, amet aut enim provident est deserunt
						cum quo dolorem praesentium eius maxime perspiciatis minima porro
						harum expedita obcaecati. Atque quasi sed nesciunt aliquid enim,
						libero fugit minima mollitia quam voluptatibus id! Impedit
						repudiandae saepe, pariatur nisi odit rerum, aliquam nesciunt quidem
						quisquam blanditiis, assumenda cupiditate dolore reprehenderit modi?
						Repudiandae, itaque vel? Asperiores, quod. Vitae qui impedit,
						corporis eos perspiciatis voluptas illum. Ducimus ex voluptatibus
						neque facilis itaque distinctio architecto earum voluptas culpa.
						Aliquid, odit. Enim explicabo repudiandae, mollitia omnis vitae
						laboriosam reprehenderit. Quia similique soluta mollitia nobis
						consectetur harum explicabo voluptates praesentium ullam recusandae
						ratione error possimus aperiam laudantium dolor aliquid iure nisi
						nam temporibus inventore delectus, dolores porro suscipit. Placeat
						mollitia dolores eaque? Asperiores, quisquam. Sit veniam eius,
						blanditiis vel beatae architecto quaerat sed fugiat. Similique,
						velit tempore. Ad quam maxime nisi!
					</p>
				</Container>
			</Layout>
		</Wrapper>
	);
};

export default MyProfile;
