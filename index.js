// index.js
import { tempRouter } from 'file:///C:/UMC-Node.js/test_folder/src/routes/temp.route.js';
import { userRouter } from 'file:///C:/UMC-Node.js/test_folder/src/routes/user.route.js';
import { specs } from 'file:///C:/UMC-Node.js/test_folder/config/swagger.config.js';
import { status } from 'file:///C:/UMC-Node.js/test_folder/config/response.status.js';
import { response } from 'file:///C:/UMC-Node.js/test_folder/config/response.js';
import SwaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();    // .env ���� ��� (ȯ�� ���� ����)

const app = express();

// server setting - veiw, static, body-parser etc..
app.set('port', process.env.PORT || 3000)   // ���� ��Ʈ ����
app.use(cors());                            // cors ��� ���
app.use(express.static('public'));          // ���� ���� ����
app.use(express.json());                    // request�� ������ json���� �ؼ��� �� �ֵ��� �� (JSON ������ ��û body�� �Ľ��ϱ� ����)
app.use(express.urlencoded({extended: false})); // �ܼ� ��ü ���ڿ� ���·� ���� ������ �ؼ�


//swagger settings
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

// router setting
app.use('/temp', tempRouter);
app.use('/user', userRouter);

// app.use((req, res, next) => {
//     const err = new BaseError(status.INTERNAL_SERVER_ERROR);
//     next(err);
// });

app.use((err, req, res, next) => {
    // ���ø� ���� ���� ����
    res.locals.message = err.message;   
    // ����ȯ���̸� ������ ����ϰ� �ƴϸ� ������� �ʱ�
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    console.log("error", err);
    res.status(err.data.status || status.INTERNAL_SERVER_ERROR).send(response(err.data));
});

app.listen(app.get('port'), () => {
    console.log(`Example app listening on port ${app.get('port')}`);
});