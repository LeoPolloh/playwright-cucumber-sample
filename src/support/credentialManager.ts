import * as fs from 'fs';
import * as path from 'path';

interface Credential {
  username: string;
  password: string;
}

export function getCredentials(env: string, userType: string): Credential {
  const filePath = path.join(__dirname, '../config/credentials.json');
  const credentialsData = fs.readFileSync(filePath, 'utf-8');
  const credentials = JSON.parse(credentialsData);
  
  if (!credentials[env] || !credentials[env][userType]) {
    throw new Error(`Credentials not found for env: ${env} and userType: ${userType}`);
  }
  return credentials[env][userType];
}