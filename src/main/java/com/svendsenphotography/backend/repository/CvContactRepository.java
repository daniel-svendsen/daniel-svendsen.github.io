package com.svendsenphotography.backend.repository;

import com.svendsenphotography.backend.model.CvContact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CvContactRepository extends JpaRepository<CvContact, Long> {
}
