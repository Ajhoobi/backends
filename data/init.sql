CREATE TABLE blog (
    id INT PRIMARY KEY,
    title VARCHAR(255),
    contents TEXT,
    category VARCHAR(255),
    date DATETIME,
    src VARCHAR(255)
);


INSERT INTO blog (id, title, contents, category, date, src) VALUES
(1, 'Vloge', 'Lorem ipsum dolor sit amet. Id consequuntur molestias et nisi eveniet eos cumque nihil est dolore laborum ut quam omnis eos accusantium similique cum recusandae omnis. Quo minima velit et enim incidunt eum quos iste sed illum odit. Ut dolorem recusandae ut laborum dolore id dolor eligendi.', 'CyberSecurity', '2020-09-28 09:00:00', 'https://via.placeholder.com/300'),
(2, 'Vloge', 'Est aliquam commodi qui iste neque qui sapiente delectus et Quis dolor? At beatae omnis qui necessitatibus odit qui repellendus expedita qui voluptas illo eum omnis accusamus! Ut perferendis aspernatur est magnam adipisci est unde beatae eum doloremque repellendus. Et nisi accusamus sit delectus maiores qui perspiciatis magni ea dicta illo est atque eaque aut omnis quia.', 'Programming', '2024-01-01 12:34:56', 'https://via.placeholder.com/300'),
(3, 'Vloge', 'Aut rerum necessitatibus est nostrum magnam et voluptas facere ut veritatis itaque. Et quibusdam quibusdam qui velit nihil est quia molestiae qui reiciendis molestiae eum odio voluptas! Qui consequatur maiores ut fuga autem qui repellat excepturi. In excepturi harum sit quaerat iure cum galisum possimus ab quia repellat ut praesentium omnis a repudiandae deleniti qui esse dolor.', 'blockchain', '2021-09-28 09:34:56', 'https://via.placeholder.com/300'),
(4, 'Vloge', 'Lorem ipsum dolor sit amet. Aut rerum molestiae aut excepturi obcaecati qui quidem rerum et voluptatem tenetur? Sit magnam voluptatum ut ipsum consequatur sit aliquid temporibus sit odio itaque est dolor ullam At nisi quod. Ea nostrum obcaecati id dolorem fugit et omnis dolorem qui natus rerum. Aut repellat totam aut repellat praesentium sed autem nulla sit repudiandae autem ex aspernatur nihil eum possimus quod ea provident ullam.', 'Programming', '2022-07-01 12:34:56', 'https://via.placeholder.com/300'),
(5, 'vlog', 'Id ipsa culpa est ipsam voluptatem sit quia animi est earum libero non voluptas porro. Ut magni delectus aut repellat delectus et dolorem repudiandae. Quo dolorem quisquam qui voluptatem nobis a officiis dolorum ut quam galisum. Et voluptas ipsum sed aperiam dignissimos et porro nostrum hic provident esse et aliquid pariatur id quod neque sit magnam voluptas.', 'CyberSecurity', '2022-05-29 08:34:56', 'https://via.placeholder.com/300'),
(6, 'vlog', 'At quam illum aut quas neque vel voluptatem laboriosam qui ducimus ratione aut atque odit? Sed cumque impedit est vitae expedita sed modi beatae ut facere commodi ea quod perferendis! Ex corporis voluptatem est dolores sunt aut sequi eius est voluptatem libero et magni pariatur.', 'blockchain', '2023-08-30 12:34:56', 'https://via.placeholder.com/300'),
(7, 'vlog', 'Lorem ipsum dolor sit amet. Aut voluptas delectus a cupiditate porro sit illo enim aut rerum veniam est doloribus quis ut voluptatem nobis. Non vitae maxime est fugit minima id ipsa quis aut consectetur nihil ad molestiae optio. In voluptas nemo qui enim perspiciatis et quia similique 33 esse soluta.', 'CyberSecurity', '2021-01-01 12:34:56', 'https://via.placeholder.com/300');


CREATE TABLE fields (
    id INT PRIMARY KEY,
    name VARCHAR(255),
    percentage INT
);

CREATE TABLE subfields (
    id INT PRIMARY KEY,
    field_id INT,
    name VARCHAR(255),
    percentage INT,
    FOREIGN KEY (field_id) REFERENCES fields(id)
);


INSERT INTO fields (id, name, percentage) VALUES
(1, 'Programming', 78),
(2, 'Cyber Security', 83),
(3, 'DevOps', 75),
(4, 'Software Engineering', 69),
(5, 'Designer', 93);

INSERT INTO subfields (id, field_id, name, percentage) VALUES
(1, 1, 'C++', 60),
(2, 1, 'C', 75),
(3, 1, 'Python', 70),
(4, 1, 'Node js', 85),
(21, 1, 'react js', 90),
(5, 2, 'Network Pentesting', 90),
(6, 2, 'WAPT', 90),
(7, 2, 'IOT-pentesting', 60),
(8, 2, 'SOC', 70),
(22, 2, 'Active Directory', 70),
(9, 3, 'CI/CD', 75),
(10, 3, 'Docker', 70),
(11, 3, 'AWS', 80),
(12, 3, 'Jenkins', 70),
(23, 3, 'kubernetes', 70),
(24, 3, 'Nginx', 80),
(13, 4, 'Software Development', 60),
(14, 4, 'Microservices', 70),
(15, 4, 'Test-Driven', 55),
(16, 4, 'Agile', 65),
(17, 5, 'UI/UX Design', 85),
(18, 5, 'HTML', 75),
(19, 5, 'Web Design', 80),
(20, 5, 'CSS', 78),
(25, 5, 'Tail wind', 78);
