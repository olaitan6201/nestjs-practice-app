import { TypeOrmModule } from "@nestjs/typeorm"

export default function DbCon(){
    return TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [],
    synchronize: true,
  })
}