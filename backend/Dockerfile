# --- Stage 1: Bygg applikationen med Maven ---
FROM maven:3.9.9-eclipse-temurin-17 AS build
WORKDIR /app
# Kopiera pom.xml först för att utnyttja Maven-cache, sedan källkoden
COPY pom.xml .
COPY src ./src
# Bygg applikationen och hoppa över tester (ta bort -DskipTests om du vill köra dem)
RUN mvn clean package -DskipTests

# --- Stage 2: Skapa runtime image med JRE ---
FROM eclipse-temurin:17-jre
WORKDIR /app
# Kopiera den byggda jar-filen från byggsteget
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
