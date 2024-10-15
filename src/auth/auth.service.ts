import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  /**
   * 1) registerWithEmail
   *  - email, nickname, password를 입력받고 사용자를 생성한다.
   *  - 생성이 완료되면 accessToken과 refreshToken을 발급한다.
   *    회원가입 후 자동 로그인을 위해 accessToken과 refreshToken을 발급한다.
   * 2) loginWithEmail
   *  - email, password를 입력받고 사용자 검증을 진행한다.
   *  - 검증이 완료되면 accessToken과 refreshToken을 발급한다.
   * 3) loginUser
   *  - 1)과 2)에서 필요한 accessToken과 refreshToken을 반환한다.
   */
}
