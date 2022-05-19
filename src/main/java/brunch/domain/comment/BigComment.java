package brunch.domain.comment;

import brunch.domain.TimeEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BigComment extends TimeEntity {

    @Id
    @GeneratedValue
    private Long id;

    @Column(length = 1000)
    private String content;

    private boolean isDeleted;
}
